import styled from "styled-components";

export const Content = styled.div`
    grid-area: content;
    padding: 44px 0 28px 24px; 
    min-height: 100vh; 
   

    >.group{
        padding: 36px 0 22px;
        margin-top: 44px;
        margin-right: 16px;
        margin-bottom: 62px;
        margin: 44px 16px 62px 0;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        border-radius: 8px;
    }

    >div .group1{
        position: absolute;
        z-index: 1;
        /* top: 142.06px; */
        top: 163px;   
        height: 149px;
        width: 197px;  
    }

    >div .group1 img{
        
        object-fit: cover;
        /* height: clamp(149px, 100%, 407px);
        width: clamp(197px, 100%, 633px); */
        height: auto;
        width: 100%;
    }

    >div .group2{
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
`;


export const ContentCard = styled.div`
    display: flex;
    /* white-space: nowrap; */
    max-width: 370px;
    width: 100%;
    animation: downtop 700ms 350ms backwards;
    /* overflow-y: hidden; */
    overflow: hidden;
    

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

    .swiper-container{
        display: flex;
    /* white-space: nowrap; */
    max-width: 370px;
    width: 100%;
    animation: downtop 700ms 350ms backwards;
    /* overflow-y: hidden; */
    overflow: hidden;
    }
`;


