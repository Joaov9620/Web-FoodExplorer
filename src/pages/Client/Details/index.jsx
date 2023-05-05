import {Content, DishInformation } from "./styles"; 
import { Container } from '../../../styles/global';

import { LayoutClient } from '../../../components/LayoutClient';
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { IngredientDetails } from "../../../components/IngredientDetails";

import { IoIosArrowBack } from "react-icons/io";
import img from '../../../assets/img/Mask group.png'

import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';

import { api } from "../../../services/api";


export function Details(){
    const [data, setData] = useState(null);

    const params = useParams();
    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    useEffect(()=> {
        async function fetchDish(){
          const response = await api.get(`/dish/${params.id}`);
          setData(response.data);
        }
        fetchDish();
    }, []);

    return (
        <LayoutClient>
            <Container>
                {
                  data &&(
                    <Content> 
                        <ButtonText 
                            icon={IoIosArrowBack}
                            title="Voltar"
                            onClick={handleBack} 
                        />
                        <div>
                            <img
                                src={img}
                                alt="Imagem de comida"
                            />
                            <DishInformation className='dishInformation'>
                                <h1>{data.name}</h1>
                                <p>{data.description}</p>
                                <div>                               
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
                                <div>
                                    <div>

                                    </div>
                                    <Button 
                                        className="buttonDish"
                                        title="incluir" 
                                    />
                                </div>
                            </DishInformation>
                        </div>          
                    </Content>
                    )
                }
            </Container>
        </LayoutClient>
    )
};