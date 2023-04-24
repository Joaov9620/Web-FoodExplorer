import { ContentCard, Content} from './styles';
import { Container } from '../../../styles/global';

import  Header  from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Section } from '../../../components/Section';
import { Card } from '../../../components/Card';

import imgDemonstrative from '../../../assets/img/pngegg 1.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {api} from '../../../services/api';

export function Home(){
    const navigate = useNavigate();

    const [dish, setDish] = useState([]);
    const meals = [];
    const desserts = [];
    const drinks = [];

    useEffect(()=>{
        async function fetchDish(){
            const response = await api.get("/dish");
            const dishData = (response.data);

            setDish(dishData);
        }
        fetchDish();

    },[]);

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

    return (
        <>
            <Header/>
            <Container>
                    <Content>
                        <div className='group'>
                            <div className='group1'>
                                <img src={imgDemonstrative} alt="Imagem demonstrativa" />
                            </div>
                            
                            <div className='group2'>
                                <h1>Sabores inigualáveis</h1>
                                <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                            </div> 
                        </div>
                        <Section title="Refeições">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                loop={true}
                                pagination={{
                                clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination,Navigation]}
                                className="mySwiper"
                            >
                                <ContentCard>
                                    {
                                        meals.map(dish=>(
                                            <SwiperSlide key={String(dish.id)}>
                                                <Card
                                                    data={dish}
                                                    onClick={() => handleDetails(dish.id)}
                                                />
                                            </SwiperSlide>
                                        ))
                                    }
                                </ContentCard>
                            </Swiper>
                        </Section>

                        <Section title="Sobremesas">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                loop={true}
                                pagination={{
                                clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination,Navigation]}
                                className="mySwiper"
                            >
                                <ContentCard>
                                    {
                                        desserts.map(dish=>(
                                            <SwiperSlide key={String(dish.id)}>
                                                <Card
                                                    data={dish}
                                                    onClick={() => handleDetails(dish.id)}
                                                />
                                            </SwiperSlide>
                                        ))
                                    }
                                </ContentCard>
                            </Swiper>
                        </Section>
                        
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
                                className="mySwiper"
                            >
                                <ContentCard>
                                    {
                                        drinks.map(dish=>(
                                            <SwiperSlide key={String(dish.id)}>
                                                <Card
                                                    data={dish}
                                                    onClick={() => handleDetails(dish.id)}
                                                />
                                            </SwiperSlide>
                                        ))
                                    }
                                </ContentCard>
                            </Swiper>
                        </Section>
                      
                    </Content>
            </Container>
            <Footer/>
        </>
    )
};