import styled from "styled-components";

export const Container =  styled.div`
    width: fit-content;
    min-width: 210px;
    /* min-width: 210px; */
    background: #00070A;
    padding: 0 24px 66px;
    border: 1px solid #000204;
    border-radius: 8px;
    text-align: right;
    cursor: pointer;
    margin-right: 27px;
    margin-top: 24px;

    .descriptionDish{
        display: none;
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
    }

    @media(min-width:768px){
        min-width: 304px;
    }
    
`;

export const CardImg = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    >img{
        /* height: clamp(88px, 100%, 176px);
        width: clamp(88px, 100%, 176px); */
        height: 176px;
        width: 176px;
        object-fit: cover;
        @media(max-width: 768px){
            width: 88px;
            height: 88px;
        }
    }

    >h1{
        font-family: 'Poppins', sans-serif;
        font-size: clamp(14px, calc(14px +1vw),24px);
        line-height: 140%;
        color: ${({theme}) => theme.COLORS.TEXT_COLOR};
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
