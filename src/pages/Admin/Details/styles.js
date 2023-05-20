import styled from "styled-components";

export const Content = styled.div`
    padding: 0 28px 100px; 
    height: calc(100vh - 70px);


    >button{
        margin-top: 3.1rem;
    }
    
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    div img{
        margin-top: 16px;
        height: 264px;
        width: 264px;
        object-fit: cover;
        border-radius: 50%;
    }


    @media(min-width:664px){
        div img{
            height: 390px;
            width: 390px;
            margin-bottom: 14px;
        }

        .dishInformation button{
            width: 50%;
        }
    }

    @media(min-width:1022px){
        >div{
            flex-direction: row;
            gap: 32px;
        }

        .dishInformation{
            text-align: start;
            align-items: self-start;
        }
    }
`;

export const DishInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: ${({theme}) => theme.COLORS.TEXT_COLOR};

    h1{
        font-weight: 500;
        font-size: clamp(2.7rem, calc(2.5rem + 1vw), 4rem);    
        line-height: 140%;
        margin-bottom: 24px;
    }

    p{
        font-weight: 400;
        font-size:clamp(1.6rem, calc(1.2rem + 1vw), 2rem);
        line-height: 140%;
        
    }

    div{    
        margin-bottom: 52px;
        margin-top: 24px;
        display: flex;
        gap: 20px;
        justify-content:center;
        flex-wrap: wrap;
    }

    button{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: 'Poppins', sans-serif;
        width: 65%;
        margin-bottom: 10rem;
    }
`;