import styled from "styled-components";

export const Container =  styled.div`
    width: fit-content;
    width: 210px;
    height: 46rem ;
    /* min-width: 210px; */
    background: #00070A;
    padding: 0 24px 66px;
    border: 1px solid #000204;
    border-radius: 8px;
    text-align: right; 
    margin-right: 27px;
    margin-top: 24px;

    .descriptionDish{
        text-align: center;
    }

    :hover{
        filter: brightness(0.9);
        /* transition: box-shadow 200ms ease 0s; */
        box-shadow: 0px 0px 6px 1px rgba(1,5,10,1);
    }

    >.pencilImg{
        height: 24px;
        width: 24px;
        margin-top: 16px ;
        margin-bottom: 27px;
        margin-right: 16px;
        cursor: pointer;
    }

    @media(min-width:768px){
        width: 304px;
    }

    @media(max-width:768px){
       .descriptionDish{
         display: none;
       }
    } 
    
`;

export const CardImg = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    >img{
        height: 176px;
        width: 176px;
        object-fit: cover;
    }

    >h1{
        font-family: 'Poppins', sans-serif;
        font-size: clamp(14px, calc(23px +1vw),24px);
        line-height: 140%;
        color: ${({theme}) => theme.COLORS.TEXT_COLOR};
        cursor: pointer;
    }
    
    >span{
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: #C4C4CC;
    }
    
    >h4{
        font-weight: 400;
        font-size: 32px;
        line-height: 160%;
        color: #82F3FF;
    } 
`;
