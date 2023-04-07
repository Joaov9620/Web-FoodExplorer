import styled from "styled-components";

export const FooterBody = styled.footer`
    width: 100%;
    background: #00111A;    
    
    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 24px;
    }

    >div h2{
        font-weight: 400;
        font-size: clamp(12px, calc(12px + 1vw), 14px);
        line-height: 160%;
        color: #FFFAF1;  
        text-align: right;
    }
`;

export const Logo = styled.div`
    color: #4D585E;
    
    h1{
        font-size: clamp(16px, calc(16px + 1vw), 24px);
    }

    >img >svg{
        background-color: #4D585E;
    } //verificar por que a cor não está pegando
`;