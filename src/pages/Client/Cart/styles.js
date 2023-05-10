import styled from "styled-components";

export const Content = styled.div`
    height: 100vh;
    padding: 35px 28px;

    .addedDishes{
        display: flex;
        gap: 75px;
        margin-top: 40px;
    }

    .noDishes{
        flex-direction: column;
        margin-top: 100px;
        align-items: center;
    }

    .dishes{
        height: 385px;
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

    .total{
        color: #AB4D55;
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

    >div:first-child {
        width: 100%;
        display: flex;
    }

    >div span{
        width: 50%;
        text-align: center;
        padding: 35px 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
        cursor: pointer;
    }

    >div span:hover{
        filter: brightness(0.5);
    }

    >div span:first-child{
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px 0 0 0;
    }

    >div span:last-child{
        border-radius: 0 10px 0 0;
    }

    .qrCode{
        padding: 57px 140px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .creditCard{
        padding: 50px 53px 53px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .creditCard div{
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
    }

    .creditCard div input{
        padding: 10px;
        background-color: #000A0F;
        border-radius: 3px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: white;
    }

    .creditCard .validity{
        flex-direction: row;
        gap: 14px;
    }

`;