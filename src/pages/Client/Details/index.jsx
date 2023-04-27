import {Content, DishInformation } from "../Details/styles"; 
import { Container } from '../../../styles/global';

import Header  from '../../../components/Header'
import { Footer } from '../../../components/Footer';
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { IngredientDetails } from "../../../components/IngredientDetails";

import { IoIosArrowBack } from "react-icons/io";
import img from '../../../assets/img/Mask group.png'

import { useState, useEffect } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';

import { api } from "../../../services/api";


export function Details(){
    const navigate  = useNavigate();
    const params = useParams();

    function handleBack(){
        navigate(-1);
    }

    function handleEditDish(id){
        navigate(`/editDish/${id}`);
    }

    const [data, setData] = useState(null);

    useEffect(()=>{
        async function fetchDish(){
          const response = await api.get(`/dish/${params.id}`);
          setData(response.data);
        }
        fetchDish();
      },[params.id]);

    return (
        <>
            <Header/>
            <Container>
                {
                  data &&
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
                                <span>{data.description}</span>
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
                                <Button 
                                    className="buttonDish"
                                    title="Editar prato" 
                                    onClick={() => handleEditDish(data.id)}
                                />
                            </DishInformation>
                        </div>          
                    </Content>
                }
            </Container>
            <Footer/>
        </>
    )
};