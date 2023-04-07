import styled from "styled-components";

export const Container = styled.textarea`
    height: 172px;
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    color: white;
    background:${({theme})=>theme.COLORS.BACKGROUND_INPUT};
    resize: none;
    border: none;
    margin-top: 16px;

    &::placeholder{
        color: #7C7C8A;
    }
`;