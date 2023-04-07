import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top: 16px;

    >input{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_SEARCH};
        height: 4.8rem;
        width: 100%;
        color: #7C7C8A;
        padding: 12px 14px;
        border: 0;
        border-radius: 5px;
        text-align: center;
    }

    >svg{
        margin: 0 16px;
    }
`;