import styled from "styled-components";


export const Container =  styled.section`
    margin: 23px 0;
    width: 100%;
    margin-top: 48px;
    font-family: 'Poppins';
    /* white-space: nowrap; */

    >div{
        display: flex;
        justify-content: space-between;
    }

    div h2{
        font-style: normal;
        font-weight: 500;
        font-size: clamp(18px, calc(18px + 1vw), 32px);
        line-height: 140%;  
        color: ${({theme}) => theme.COLORS.TEXT_COLOR};
    }

    div a{
        font-size:20px;
        color: white;
    }

    div a:hover{
        filter: brightness(0.5);
    }
`;