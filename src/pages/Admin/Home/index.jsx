import { GroupHeader, BackgroundHome, Content,} from './styles';
import { Container } from '../../../styles/global';

import { Layout } from '../../../components/Layout/index';
import { Slider } from '../../../components/Slider';
import {Card} from '../../../components/Card';

import imgDemonstrative from '../../../assets/img/pngegg 1.png';

import {api} from '../../../services/api';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHeader } from '../../../hooks/HeaderContext';


export function Home(){
    const navigate = useNavigate();
    const {searchValue = ''} = useHeader();
    const [dish, setDish] = useState([]);
    const meals = [];
    const desserts = [];
    const drinks = [];
    

    if(dish){
        for (let i = 0; i < dish.length; i++) {
            if (dish[i].category === "Refeições") {
              meals.push(dish[i]);
            } else if (dish[i].category === "Sobremesas") {
              desserts.push(dish[i]);
            } else if (dish[i].category === "Bebidas") {
              drinks.push(dish[i]);
            }
        }
    }

    function handleDetails(id){
        navigate(`/details/${id}`);
    }
    useEffect(()=>{
        async function fetchDish(){
            const response = await api.get("/dish");
            const dishData = (response.data);

            setDish(dishData);
        }
        fetchDish();
    },[]);

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/dish?name=${searchValue}`);
            const dishData = response.data;
            setDish(dishData);    
        }
        fetchNotes();
    }, [searchValue]);
    
    return (
        <Layout>
            <Container>
                    <Content>
                        <GroupHeader className='groupHeader'>
                            <div className='group1Img'>
                                <img src={imgDemonstrative} alt="Imagem demonstrativa" />
                            </div>
                            
                            <div className='group2Inf'>
                                <h1>Sabores inigualáveis</h1>
                                <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                            </div> 
                        </GroupHeader>

                        {  
                            (dish.length === 0) &&
                            <BackgroundHome>
                                <span>Nenhum prato adicionado!</span>
                            </BackgroundHome>
                        }
                       
                        {
                            (meals.length > 0) &&
                            <Slider title='Refeições' data={meals} handleDetails={handleDetails} Card={Card}/>
                        }

                        {
                            (desserts.length > 0) &&
                            <Slider title='Sobremesas' data={desserts} handleDetails={handleDetails} Card={Card}/>
                        }
                                
                        {
                            (drinks.length > 0) &&
                            <Slider title='Bebidas' data={drinks} handleDetails={handleDetails} Card={Card}/>
                        }                                

                    </Content>
            </Container>
        </Layout>
    )
};