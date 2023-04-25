import styled from "styled-components";
import { Swiper} from "swiper/react";

export const Content = styled.div`
    padding: 44px 0 28px 24px; 
    min-height: 100vh; 

    .swiperSlider {
        width: auto !important;
        margin-right: 0 !important;
        box-sizing: border-box;
    }

    >.groupHeader{
        padding: 36px 0 22px;
        margin-top: 44px;
        margin-right: 16px;
        margin-bottom: 62px;
        margin: 44px 16px 62px 0;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        border-radius: 8px;
    }

    >div .group1Img{
        position: absolute;
        z-index: 1;
        /* top: 142.06px; */
        top: 163px;   
        height: 149px;
        width: 197px;  
    }

    >div .group1Img img{
        
        object-fit: cover;
        /* height: clamp(149px, 100%, 407px);
        width: clamp(197px, 100%, 633px); */
        height: auto;
        width: 100%;
    }

    >div .group2Inf{
        position: relative;
        /* margin: 17.2rem 0 6.3rem; */
        /* padding: 8.7rem  10rem 8.7rem 0; */
        margin: 0 21px 0 189px;
        color: ${({theme}) => theme.COLORS.TEXT_COLOR};
        text-align: left;

        >h1{
            font-family: 'Poppins',sans-serif;
            /* font-weight: 500; */
            font-weight: 600; 
            font-size: clamp(18px, calc(18px +1vw), 40px);
            line-height: 140%;
        }

        >span{
            font-weight: 400;
            font-size: clamp(12px,calc(10px + 1vw),16px);
            line-height: 140%;
        }
    }

    .sliderContainer{
        position: relative;
    }

    .cardColor{
        display: flex;
        justify-content: space-between;
        height: 448px;
        position: absolute;
        z-index: 2;
        width: 1122px;

        div{
            position: absolute;
            width: 278px;
            left: 276px;
            top: 0px;
            background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
            /* background-color: #00131C; */
            transform: matrix(-1, 0, 0, 1, 0, 0);
        }
    }

    .swiper-button {
        .swiper-button-prev::after, .swiper-button-next::after {
            color: #FFFFFF;
            font-size: 40px;
        }
    }
`;


export const ContentCard = styled.div`
    display: flex;
    gap: 32px;
    max-width: 370px;
    width: 100%;
    animation: downtop 700ms 350ms backwards;
    overflow: hidden;

  .swiperSlider{
    width: auto;
    margin-right: 47px;
  }
    

    .dishImg img:hover{
        transform: scale(1.1);
    }
    

    @keyframes downtop {
        0% {
            opacity: 0;
            transform: translateY(15px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media(min-width:664px){
        max-width: 632px;
    }

    @media(min-width:1022px){
        max-width: 1122px;
    }

    
`;
