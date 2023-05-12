import { ContentCard, GroupHeader, BackgroundHome, Content,} from './styles';
import { Container } from '../../../styles/global';

import { Layout } from '../../../components/Layout/index';
import { Section } from '../../../components/Section';
import { Card } from '../../../components/Card';
import { ButtonText } from '../../../components/ButtonText';

import imgDemonstrative from '../../../assets/img/pngegg 1.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

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
                                                        <Card
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
        </Layout>
    )
};