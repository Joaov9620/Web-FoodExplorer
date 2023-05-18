import {Content, Section, DishesAdded, Payment} from './styles'
import { Container } from "../../../styles/global";
import { LayoutClient } from "../../../components/LayoutClient";
import { Button } from '../../../components/Button';
import { ButtonText } from '../../../components/ButtonText';
import img from '../../../assets/img/Mask group-1.png';
import qrcode from '../../../assets/qrcode.svg';
import { IoIosArrowBack } from "react-icons/io";
import {MdOutlineFoodBank} from "react-icons/md";
import {useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useCart } from '../../../hooks/CartContext';


export function Cart(){

    const navigate = useNavigate();

    const {cartItems, setCartItems, removeFromCart} = useCart();
    const [paymentMethod, setPaymentMethod] = useState('pix');

    function handlePaymentMethod(method) {
        setPaymentMethod(method);
    }

    function handleBack(){
        navigate(-1);
    }


    useEffect(() => {
        const dishSelect = JSON.parse(localStorage.getItem("dishSelect"));
        if (dishSelect) {
          setCartItems(dishSelect);
        }
    }, []);

    return (
        <LayoutClient>
            <Container>
                <Content>
                <ButtonText 
                    icon={IoIosArrowBack}
                    title="Voltar"
                    onClick={handleBack} 
                />
                {
                    (cartItems.length > 0) ?
                    (
                        <div className='addedDishes'>
                            <Section>
                                <h1>Meu pedido</h1>
                                 <div className='dishes'>
                                    {cartItems.map((item, index) => (
                                        <DishesAdded key={index}>
                                            <img src={img} alt="" />
                                            <div>
                                                <div className='group'>
                                                    <h5>01 {item.name}</h5>
                                                    <span>R${parseFloat(item.price).toFixed(2)}</span>
                                                </div>
                                                <span onClick={() => removeFromCart(item)}>Excluir</span>
                                            </div>
                                        </DishesAdded>
                                    ))}
                                    </div> 
                                    <h2 className='total'>Total: R$ {parseFloat(cartItems.reduce((total, item) => total + item.price, 0)).toFixed(2)}</h2> 
                            </Section>
                            
                            <Section>
                                    <h1>Pagamento</h1>
                                    <Payment className='payment'>
                                        <div>
                                            <span onClick={() => handlePaymentMethod('pix')} >PIX</span>
                                            <span onClick={() => handlePaymentMethod('credit')}>Crédito</span>
                                        </div>

                                        {
                                            paymentMethod === 'pix' ? 
                                            (
                                                <div className='qrCode'>
                                                    <img src={qrcode} alt="Imagem do QrCode"/>
                                                </div>
                                            ) :
                                            (
                                                <div className='creditCard'>
                                                <div>
                                                    <label htmlFor="cardNumber">Número do Cartão</label>
                                                    <input 
                                                    type="text" 
                                                    id='cardNumber'
                                                    placeholder='0000 0000 0000 0000'
                                                    />
                                                </div>

                                                <div className='validity'>
                                                    <div>
                                                        <label htmlFor="validity">Validade</label>
                                                        <input 
                                                            type="data" 
                                                            id='validity'
                                                            placeholder='04/25'
                                                        />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="cvc">CVC</label>
                                                            <input 
                                                                type="number" 
                                                                id='cvc'
                                                                maxLength={3}
                                                                minLength={3}
                                                                placeholder='000'
                                                            />
                                                        </div>
                                                    </div>
                                                    <Button title='Finalizar pagamento'/>
                                                </div>
                                            )
                                        }
                                    </Payment>
                            </Section>
                        </div>
                    ) :
                    (
                        <div className='noDishes'>
                            <MdOutlineFoodBank />
                            <div>
                                <h1> Nenhum prato adicionado </h1>
                                <span>Adicione um prato</span>
                            </div>
                        </div>
                    )
                }
                </Content>
            </Container>
        </LayoutClient>
    )
};
