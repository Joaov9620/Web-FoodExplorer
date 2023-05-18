import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

export const Container =  styled.div`
    width: fit-content;
    width: 260px;
    height: 46rem ;
    background: #00070A;
    padding: 0 24px 66px;
    border: 1px solid #000204;
    border-radius: 8px;
    text-align: right;
    cursor: auto;    
    margin-right: 27px;
    margin-top: 24px;

    .imgDish{
        border-radius: 50%;
        object-fit: cover;
    }
    
    :hover{
        filter: brightness(0.9);
        /* transition: box-shadow 200ms ease 0s; */
        box-shadow: 0px 0px 6px 1px rgba(1,5,10,1);
    }

    .favoriteActive{
        color: red;
    }

    .favoriteActive:hover{
       filter: brightness(0.8);
    }

    @media(min-width:768px){
        width: 304px;
        
        .imgDish{
            height: 176px;
            width: 176px;
        }
    }

    @media(max-width:768px){
       .descriptionDish{
         display: none;
       }

       .buttonsCard{
            flex-direction: column;
       }
    }    
`;

export const FavoriteIcon = styled(AiFillHeart)`
    font-size: 30px;
    margin-top: 13px ;
    margin-right: 16px;
    cursor: pointer;
    opacity: 0.5;

    :hover{
        filter: brightness(0.8);
    }
`;

export const CardImg = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;

    >img{
        height: 140px;
        width: 140px;
        object-fit: cover;
    }

    >h1{
        font-family: 'Poppins', sans-serif;
        font-size: clamp(14px, calc(14px +1vw),24px);
        line-height: 140%;
        color: ${({theme}) => theme.COLORS.TEXT_COLOR};
        font-size: 24px;
        cursor: pointer;
    }
    
    >span{
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: #C4C4CC;
        text-align: center;
    }
    
    >h4{
        font-weight: 400;
        font-size: 32px;
        line-height: 160%;
        color: #82F3FF;
    } 

    >div{
        display: flex;
        align-items: center;
        gap: 14px;
    }

    >div div{
       display: flex;
       gap: 10px;
    }

    >div div span{
        width: 40px;
        text-align: center;
        font-size: 24px;
    }
    
    >div div button{
        background: none;
        border: none;
        width: fit-content;
        display: flex;
        align-items: center;
    }

    >div .buttonAddDish{
        width: 90px;
        background: #750310;
    }
`;
