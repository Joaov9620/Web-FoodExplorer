import styled from "styled-components";

export const Content = styled.div`
    height: 100vh;
    padding: 35px 28px;
    display: flex;
    gap: 75px;

    >div h1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        color: #E1E1E6;
        margin-bottom: 32px;
    }

    .groups{
       //colocar um overflow personalizado
    }

    .group01{
        display: flex;
        align-items: center;
        gap: 13px;
        margin-bottom: 20px;
    }

    .group01 img{
        width: 72px;
        height: 72px;
        object-fit: cover;
    }

    .group02 >span{
        font-size: 12px;
        color: #AB4D55;
    }

    .group03{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .group03 h5{
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
    }

    .group03 span{
        font-size: 15px;
        opacity: 0.5;
    }

    .group04{
       
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        /* padding: 32px 104px; */
    }

    .group04 span{
       
    }

    .group04 span:first-child{
        background: rgba(255, 255, 255, 0.05);
    }
    
   
    
`;