import styled from "styled-components";

export const Container =  styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 9.6rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
    grid-area: content;
    padding: 3.2rem 12.3rem;

    >div{
        margin-top: 4.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 48px;

        img{
            height: 300px;
            width: 300px;
        }
    }
`;

export const DishInformation = styled.div`
    font-family: 'Poppins', sans-serif;
    color: ${({theme}) => theme.COLORS.TEXT_COLOR};

    h1{
        font-weight: 500;
        font-size: 4rem;    
        line-height: 140%;
        margin-bottom: 24px;
    }

    span{
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
    }

    div{    
        display: flex;
        gap: 20px;
        margin-bottom: 52px;
        margin-top: 24px;

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
    }
`;