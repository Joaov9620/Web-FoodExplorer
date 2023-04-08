import styled from "styled-components";

export const Container = styled.div`
    height: 32px;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 8px 16px;
   
   
    background-color: ${({isNew}) => isNew ? "transparent" : "#76797B"};
    color: ${({isNew}) => isNew ? "#7C7C8A" : "WHITE"};
    border:${({isNew}) => isNew ? "1px dashed #7C7C8A" : "none"};

    >button{
        border: none;
        background: none;
        display: inherit;
    }
    
    .button-delete{
        color: WHITE;
    }

    .button-add{
        color: #7C7C8A;
    }

    >input{
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        margin-right: 8px;

        &::placeholder{
            color: #7C7C8A;
        }
    }

    @media(min-width:664px){
        width: 175px;
    }
`;
