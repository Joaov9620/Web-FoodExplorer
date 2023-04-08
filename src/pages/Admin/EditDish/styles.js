import styled from "styled-components";

export const Content = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 11px 24px 55px;

  input:not(#ingredient){
    background-color: #0d161b;
    text-align: start;
    border-radius: 8px;
  }

  >section{
    margin-top: 2.4rem;
  }

  .groups >div{
    margin-top: 24px;
  }

  .group04{
    margin-top: 24px;
  }

  @media(min-width:664px){
    padding: 40px 28px 116px;
  }

  @media(min-width:1022px){
    .group01{
      display: flex;
      gap: 3.2rem;

      >div:nth-child(1){
        width: 20%;
      }

      >div:nth-child(2){
        width: 50%;
      }

      >div:nth-child(3){
        width: 30%;
      } 
    }

    .group02{
      display: flex;
      gap: 16px;

      >div:nth-child(1){
        width: 75%;
      }

      >div:nth-child(2){
        width: 25%;
      }
    }

    .group04{
      justify-content: flex-end;
    }
  }
`;


export const Group01 = styled.div`
  width: 100%;
  margin-top: 32px;

  > div:nth-child(1) >div svg{
    font-size: 24px;
    color: #fff;
    cursor: auto;
  }

  >div:nth-child(1) input[type='file']{
    display: none;
  }

  >div:nth-child(1) >div >label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    position: relative;
    font-weight: 500;
    font-size: 14px;
    margin-top: 16px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    border-radius: 8px;
    gap: 8px;
    
  }

  >div:nth-child(1) >div >label::before {
    content: '';
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
  }

  >div:nth-child(1) > div > label:hover{
    
  }

  >div select {
    background-color: #0d161b;
    height: 4.8rem;
    color: #7c7c8a;
    padding: 12px 14px;
    border: none;
    border-radius: 8px;
    font-size: 1.6rem;
    width: 100%;
    margin-top: 16px;
  }

`;

export const Group02 = styled.div`
  width: 100%;
  
  >div .ingredientItem{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;
    min-height: 48px;
    border-radius: 8px;
    background: #0D161B;
    padding: 8px;
  }
`;

export const Group03 = styled.div`

  
`;

export const Group04 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 3.2rem;

  button:nth-child(1){
    background:${({theme})=>theme.COLORS.BACKGROUND_INPUT};
  }

  button:nth-child(2){
    background:#AB4D55;
  }
`;


