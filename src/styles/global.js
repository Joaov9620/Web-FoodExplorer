import styled,{ createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    :root{
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        color: ${({theme}) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
        height: 100vh;
    }

    body, input, button, textarea, select{
        font-family: 'Roboto', serif;
        font-size: 1.6rem;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;

export const Container = styled.div`
    width: 100%;

    margin: 0 auto;
    max-width: 370px;

    @media(min-width:664px){
        max-width: 632px;
    }

    @media(min-width:1022px){
        max-width: 1122px;
    }
`;