import {Content, Section, DishesAdded, Payment} from './styles'
import { Container } from "../../../styles/global";
import { LayoutClient } from "../../../components/LayoutClient";
import { ButtonText } from '../../../components/ButtonText';
import img from '../../../assets/img/Mask group-1.png';
import qrcode from '../../../assets/qrcode.svg';
import { IoIosArrowBack } from "react-icons/io";
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from '../../../hooks/CartContext';

export function Cart(){

    const navigate = useNavigate();

    const {cartItems, setCartItems, removeFromCart} = useCart();

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

                <div>
                   <Section>
                        <h1>Meu pedido</h1>
                        <div className='dishes'>
                            {cartItems.map((item, index) => (
                                <DishesAdded key={index}>
                                    <img src={img} alt="" />
                                    <div>
                                        <div className='group'>
                                            <h5>01 {item.name}</h5>
                                            <span>R$ {item.price.toFixed(2)}</span>
                                        </div>
                                        <span onClick={() => removeFromCart(item)}>Excluir</span>
                                    </div>
                                </DishesAdded>
                            ))}
                        </div> 
                        <h2>Total: R$ {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</h2> 
                   </Section>
                   
                   <Section>
                        <h1>Pagamento</h1>
                        <Payment>
                            <div>
                                <span>PIX</span>
                                <span>Crédito</span>
                            </div>
                            <div className='qrCode'>
                                <img src={qrcode} alt="Imagem do QrCode"/>
                            </div>
                        </Payment>
                   </Section>
                </div>
                </Content>
            </Container>
        </LayoutClient>
    )
};
