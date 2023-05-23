import {Content, DishInformation } from "./styles"; 
import { Container } from '../../../styles/global';

import { LayoutClient } from '../../../components/LayoutClient';
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { IngredientDetails } from "../../../components/IngredientDetails";

import { IoIosArrowBack } from "react-icons/io";
import iconToDecrease from '../../../assets/toDecrease.svg';
import iconToAdd from '../../../assets/toAdd.svg';
import imgDishPlaceholder from '../../../assets/img/dishImg.jpg';
import { LoadingSpinner } from '../../../components/LoadingSpinner';

import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { useCart } from '../../../hooks/CartContext';

import { api } from "../../../services/api";


export function Details(){
    const [data, setData] = useState(null);
    const [count, setCount] = useState(1);
    const [countPriceD, setCountPrice] = useState('');
    const [price, setPrice] = useState(null);
    const [img, setImg] = useState(null);
    const {cartItems, addToCart} = useCart();
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const navigate = useNavigate();
    
    const fileImgDish = img? `${api.defaults.baseURL}/files/${img}` :imgDishPlaceholder;

    function handleAdd(){
        setCount(count + 1);
        setCountPrice(countPriceD + price);
    }

    function handleToDecrease(){
        if (count > 1){
            setCount(count - 1);
            setCountPrice(countPriceD - price);
        }
    }

    function handleBack(){
        navigate(-1);
    }

    useEffect(()=> {
        async function fetchDish(){
          const response = await api.get(`/dish/${params.id}`);
          setData(response.data);
          setCountPrice(response.data.price);
          setPrice(response.data.price);
          setImg(response.data.img);
        }      
        setLoading(false);
        fetchDish();
    }, []);

    useEffect(() => {
        localStorage.setItem("dishSelect", JSON.stringify(cartItems));
    }, [cartItems]);


    return (
        <LayoutClient>
            <Container>
                <Content> 
                    {
                        loading ? <div className="loading"><LoadingSpinner/></div>
                        :
                        data &&(                      
                            <>
                                <ButtonText 
                                    icon={IoIosArrowBack}
                                    title="Voltar"
                                    onClick={handleBack} 
                                />
                                <div>
                                    <img
                                        src={fileImgDish}
                                        alt="Imagem de comida"
                                        className="imgDish"
                                    />
                                    <DishInformation className='dishInformation'>
                                        <h1>{data.name}</h1>
                                        <p>{data.description}</p>
                                        <div className="ingredients">                               
                                            {
                                                data.ingredients &&  
                                                data.ingredients.map((ingredient, index) =>(
                                                    <IngredientDetails
                                                        key={String(index)}
                                                        value={ingredient.name}                                          
                                                    />
                                                ))
                                            }
                                        </div>

                                        <div className="buttons">
                                            <div >
                                                <button onClick={handleToDecrease}>
                                                    <img src={iconToDecrease} alt="Icone de diminuir" />
                                                </button>
                                                <span>{count < 10 ? `0${count}` : count}</span>
                                                <button onClick={handleAdd}>
                                                    <img src={iconToAdd} alt="Icone de adicionar" />
                                                </button>
                                            </div>
                                            <div>
                                                <Button 
                                                    className="buttonDish"
                                                    title= { `incluir ∙ R$ ${countPriceD.toString().slice(0, 4)}`}	
                                                    onClick={() => addToCart(data)}
                                                />
                                            </div>
                                        </div>
                                    </DishInformation>
                                </div>  
                            </>        
                        )
                    }
                </Content>
            </Container>
        </LayoutClient>
    )
};