import styled from "styled-components";

export const Content = styled.div`
    padding: 0 28px 0; 
    min-height: 100vh;

    >button{
        margin-top: 3.1rem;
    }
    
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    div .imgDish{
        margin-top: 16px;
        height: 264px;
        width: 264px;
        object-fit: cover;
        border-radius: 50%;
    }


    @media(min-width:664px){
        div .imgDish{
            height: 390px;
            width: 390px;
            margin-bottom: 14px;
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

    .ingredients{    
        margin-bottom: 52px;
        margin-top: 24px;
        display: flex;
        gap: 20px;
        justify-content:center;
        flex-wrap: wrap;
    }   

    .buttons{
        display: flex;
        gap: 30px;
        align-items: center;
    }

    .buttons div{
        display: flex;
        gap: 15px;
        align-items: center;
    }

    .buttons div span{
        width: 40px;
        text-align: center;
        font-size: 24px;
    }
    
    .buttons div:first-child button{
        background: none;
        border: none;
        width: fit-content;
        display: flex;
        align-items: center;
    }

    .buttons >button{
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 10rem;
    }

    .buttons .buttonDish{
        width: 180px;
        padding: 1.2rem 1.2rem;
    }
`;