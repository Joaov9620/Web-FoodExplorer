import { ContentCard, GroupHeader, BackgroundHome, Content,} from './styles';
import { Container } from '../../../styles/global';

import { LayoutClient } from '../../../components/LayoutClient';
import { Section } from '../../../components/Section';
import { CardClient } from '../../../components/CardClient';
import { ButtonText } from '../../../components/ButtonText';

import imgDemonstrative from '../../../assets/img/pngegg 1.png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {api} from '../../../services/api';

import { useEffect, useState } from 'react';
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
                            <Section title="Refeições">
                                <div className='sliderContainer'>
                                    <div className='cardColor' style={{display: 'none'}}>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <Swiper 
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        loop={true}
                                        effect='fade'
                                        speed={400}
                                        pagination={{
                                        clickable: true,           
                                        }}
                                        navigation={true}
                                        modules={[Pagination,Navigation]}
                                        className="swiper-button"
                                        >
                                            <ContentCard >
                                                    {  
                                                        meals.map(dish=>(
                                                            <SwiperSlide key={String(dish.id)} className='swiperSlider'>
                                                                <CardClient
                                                                    data={dish}
                                                                    handleDetails={handleDetails}                                                  
                                                                />
                                                            </SwiperSlide>
                                                        ))
                                                    }
                                            </ContentCard>
                                    </Swiper>
                                </div>     
                            </Section>
                        }

                        {
                            (desserts.length > 0) &&
                            <Section title="Sobremesas">
                                        <Swiper
                                            slidesPerView={3}
                                            spaceBetween={30}
                                            loop={true}
                                            speed={300}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination,Navigation]}
                                            className="swiper-button"
                                        >
                                            <ContentCard>
                                                {
                                                    desserts.map(dish=>(
                                                        <SwiperSlide key={String(dish.id)} className='swiperSlider'>
                                                            <CardClient
                                                                data={dish}
                                                                handleDetails={handleDetails}
                                                            />
                                                        </SwiperSlide>
                                                    ))
                                                }
                                            </ContentCard>
                                        </Swiper>
                            </Section>
                        }
                                
                        {
                            (drinks.length > 0) &&
                            <Section title="Bebidas">
                                    <Swiper
                                         slidesPerView={3}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={{
                                        clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Pagination,Navigation]}
                                        className="swiper-button"
                                    >
                                        <ContentCard>
                                            {
                                                drinks.map(dish=>(
                                                    <SwiperSlide key={String(dish.id)} className='swiperSlider'>
                                                        <CardClient
                                                            data={dish}
                                                            handleDetails={handleDetails}                                       
                                                        />
                                                     </SwiperSlide>
                                                ))
                                            }
                                        </ContentCard>
                                    </Swiper>
                            </Section>
                        }                                

                    </Content>
            </Container>
        </LayoutClient>
    )
};