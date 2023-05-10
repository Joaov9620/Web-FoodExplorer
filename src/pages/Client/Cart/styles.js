import styled from "styled-components";

export const Content = styled.div`
    height: 100vh;
    padding: 35px 28px;

    >div{
        display: flex;
        gap: 75px;
        margin-top: 40px;
    }

    .dishes{
        max-height: 480px;
        overflow-x: hidden;
        margin-bottom: 25px;  
    }

    * {
        scrollbar-width: auto;
        scrollbar-color: #7c777e #ffffff;
    }

    *::-webkit-scrollbar {
        width: 13px;
    }

    *::-webkit-scrollbar-track {
        background: none;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #7c777e;
        border-radius: 10px;
        border: 3px solid #ffffff;
    }
`;

export const Section = styled.section`
    width: 100%;

    h1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        color: #E1E1E6;
        margin-bottom: 32px;
    }
`;

export const DishesAdded = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    margin-bottom: 30px;

    >img{
        width: 72px;
        height: 72px;
        object-fit: cover;
    }

    >div >span{
        font-size: 12px;
        color: #AB4D55;
        cursor: pointer;
    }

    .group{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .group h5{
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
    }

    .group span{
        font-size: 15px;
        opacity: 0.5;
    }
`;

export const Payment = styled.div`
    width: 100%;
    /* border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px; */

    >div:first-child {
        width: 100%;
        display: flex;
        /* padding: 32px 104px; */
    }

    >div span:first-child{
        background: rgba(255, 255, 255, 0.05);
    }

    /* .group05 span{
        padding: 32px 104px;
    }

    .group04 div:nth-child(2){
        padding: 57px 140px;
    }
     */

    >.qrCode{
        padding: 57px 140px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

`;