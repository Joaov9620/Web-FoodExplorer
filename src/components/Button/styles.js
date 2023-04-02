import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 3.2rem;
    gap: 8px;

    width: 216px;
    height: 4.8rem;
    background:  ${({theme}) => theme.COLORS.BACKGROUND_BUTTON_RED};
    color: white;
    border-radius: 5px;
    border: none;

    &:disabled{
        opacity: 0.5;
    }
`;