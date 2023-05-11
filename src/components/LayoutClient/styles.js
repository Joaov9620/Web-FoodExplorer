import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    margin: 0 auto;
    max-width: 370px;

    @media(min-width:664px){
        max-width: 632px;
    }

    @media(min-width:1022px){
        max-width: 1122px;
    }
`;