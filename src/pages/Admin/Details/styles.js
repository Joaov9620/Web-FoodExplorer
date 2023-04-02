import styled from "styled-components";

export const Container =  styled.div`
    width: 100%;
    min-height: 100vh;

    display: grid;
    grid-template-rows: 9.6rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
    grid-area: content;
    padding: 3.3rem 5.6rem;

    >div{
        margin-top: 4.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .img{
            margin-top: 16px;
            height: 264px;
            width: 264px;
            object-fit: cover;
        }
    }

    @media(min-width:1080px){

        padding: 3.2rem 12.3rem;

        div{
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 4.8rem;
        }
        
        .dishInformation{
            text-align: start;
        }

        .ingredients{
            justify-content: flex-start;
        }

        .dishInformation button{
            width: 160px;
        }
    }
`;

export const DishInformation = styled.div`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: ${({theme}) => theme.COLORS.TEXT_COLOR};

    h1{
        font-weight: 500;
        font-size: clamp(2.7rem, calc(2.7rem + 1vw), 4rem);    
        line-height: 140%;
        margin-bottom: 24px;
    }

    span{
        font-weight: 400;
        font-size:clamp(1.6rem, calc(1.6rem + 1vw), 2.4rem);
        line-height: 140%;
        
    }

    div{    
        margin-bottom: 52px;
        margin-top: 24px;
        display: flex;
        gap: 20px;
        justify-content:center;
        flex-wrap: wrap;

        >h5{
            background: #192227;
            border-radius: 5px;
            padding: 4px 8px;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }

    button{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: 'Poppins', sans-serif;
        width: 100%;
    }
`;