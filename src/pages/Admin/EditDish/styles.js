import styled from "styled-components";

export const Container = styled.div`
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
`;

export const InputsLabel = styled.div`
    display: grid;
    gap: 3.2rem;
    margin-top: 3.2rem;

`;

export const Frame01 = styled.div`
    width: 100%;
    display:flex;
    gap: 3.2rem;

    >label{
        display: grid;
        gap: 2rem;
    }

    >label input{
        background: #0D161B;
    }

    >label:nth-child(1) {
        width: 20%;
    }

    >label:nth-child(2) {
        width: 50%;
    }

    >label:nth-child(3) {
        width: 30%;
    }

    >label:nth-child(1) div{
        background: #0D161B;
        border-radius: 8px;
    }
`;