import { ContentCard, GroupHeader, BackgroundHome, Content,} from './styles';
import { Container } from '../../../styles/global';

import { Layout } from '../../../components/Layout/index';
import { Section } from '../../../components/Section';
import { Card } from '../../../components/Card';

import imgDemonstrative from '../../../assets/img/pngegg 1.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {api} from '../../../services/api';
import { ButtonText } from '../../../components/ButtonText';

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
    } //refatorar esse código(fazer essa verificação no backend pois este mesmo codigo se repete na page SeeAll)

    function handleDetails(id){
        navigate(`/details/${id}`);
    }


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
                                                                <Card
                                                                    data={dish}
                                                                    onClick={() => handleDetails(dish.id)}
                                                                />
                                                            </SwiperSlide>
                                                        ))
                                                    }
                                            </ContentCard>
                                    </Swiper>
                                </div>
                                {
                                    (meals.length > 10) &&
                                    <div className="buttonText">
                                        <ButtonText title='Ver mais'/>
                                    </div>
                                }      
                            </Section>
                        }

                        {
                            (desserts.length > 0) &&
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
                                            className="swiper-button"
                                        >
                                            <ContentCard>
                                                {
                                                    desserts.map(dish=>(
                                                        <SwiperSlide key={String(dish.id)} className='swiperSlider'>
                                                            <Card
                                                                data={dish}
                                                                onClick={() => handleDetails(dish.id)}
                                                            />
                                                        </SwiperSlide>
                                                    ))
                                                }
                                            </ContentCard>
                                        </Swiper>
                                        {   
                                            (desserts.length > 10) &&
                                            <div className="buttonText">
                                                <ButtonText title='Ver mais'/>
                                            </div>
                                        }
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
                                                        <Card
                                                            data={dish}
                                                             onClick={() => handleDetails(dish.id)}
                                                        />
                                                     </SwiperSlide>
                                                ))
                                            }
                                        </ContentCard>
                                    </Swiper>
                                    {
                                        (drinks.length > 10) &&
                                        <div className="buttonText">
                                            <ButtonText title='Ver mais'/>
                                        </div>
                                    }
                            </Section>
                        }                                

                    </Content>
            </Container>
        </Layout>
    )
};