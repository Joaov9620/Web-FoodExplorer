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
    padding: 2.4rem 12.3rem;

    >img{
        position: absolute;
        z-index: 1;
        top: 142.06px;
        border: none;
    }

    >.group{
        position: relative;
        margin: 17.2rem 0 6.3rem;
        padding: 8.7rem  10rem 8.7rem 0;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        color: ${({theme}) => theme.COLORS.TEXT_COLOR};
        text-align: right;
        border-radius: 8px;

        >h1{
            font-family: 'Poppins',sans-serif;
            font-weight: 500;
            font-size: 40px;
            line-height: 140%;
            margin-bottom: 8px;
        }
    }
`;

export const ContentCard = styled.div`
    width: 100%;
    margin-top: 23px;
    display: flex;
    gap: 27px;
`;
