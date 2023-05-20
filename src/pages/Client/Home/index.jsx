import { GroupHeader, BackgroundHome, Content,} from './styles';
import { Container } from '../../../styles/global';

import { LayoutClient } from '../../../components/LayoutClient';
import { CardClient } from '../../../components/CardClient';
import { Slider } from '../../../components/Slider';

import imgDemonstrative from '../../../assets/img/pngegg 1.png';

import {api} from '../../../services/api';

import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth';
import { useHeader } from '../../../hooks/HeaderContext';

export function Home(){
    const navigate = useNavigate();

    const {searchValue = ''} = useHeader();
    const {user} = useAuth();
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
            const response = await api.get('/favoriteDish', { params: { user_id: user.id } });
            const dishData = (response.data);

            setDish(dishData);
        }
        fetchDish();
    },[]);

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/favoriteDish?user_id=${user.id}&name=${searchValue}`);
            const dishData = (response.data);
            setDish(dishData);    
        }
        fetchNotes();
    }, [searchValue]);


    return (
        <LayoutClient>
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
                            <Slider title='Refeições' data={meals} handleDetails={handleDetails} Card={CardClient}/>
                        }

                        {
                            (desserts.length > 0) &&
                            <Slider title='Refeições' data={desserts} handleDetails={handleDetails} Card={CardClient}/>
                        }
                              
                        {
                            (drinks.length > 0) &&
                            <Slider title='Refeições' data={drinks} handleDetails={handleDetails} Card={CardClient}/>
                        }                              

                    </Content>
            </Container>
        </LayoutClient>
    )
};