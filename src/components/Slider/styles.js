import styled from "styled-components";

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