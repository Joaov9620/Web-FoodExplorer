import styled from "styled-components";

export const Content = styled.div`
  min-height: 100vh;
  padding: 40px 0 116px;

  input{
    background-color: #0d161b;
    text-align: start;
  }

  >section{
    display: grid;
    gap: 3.2rem;
    margin-top: 3.2rem;
  }
`;

export const Group01 = styled.div`
  width: 100%;
  display: flex;
  gap: 3.2rem;

  > div select {
    background-color: #0d161b;
    height: 4.8rem;
    color: #7C7C8A;
    padding: 12px 14px;
    border: none;
    border-radius: 8px;
    font-size: 1.6rem;
    width: 100%;
    margin-top: 16px;
  }

  > label:nth-child(1) {
    width: 20%;
  }

  > div:nth-child(2) {
    width: 50%;
  }

  > div:nth-child(3) {
    width: 30%;
  }

  > label:nth-child(1) div {
    background:${({theme})=>theme.COLORS.BACKGROUND_INPUT};
    border-radius: 8px;
    padding: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }

  > label:nth-child(1) svg {
    font-size: 2.4rem;
    color: #fff;
  }

  > label:nth-child(1) input[type="file"] {
    display: none;
  }
`;

export const Group02 = styled.div`
  display: flex;
  gap: 3.2rem;

  >div:nth-child(1){
    width: 75%;
  }

  >div:nth-child(2){
    width: 25%;
  }
`;

export const Group03 = styled.div`
  
`;

export const Group04 = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3.2rem;

  button:nth-child(1){
    background:${({theme})=>theme.COLORS.BACKGROUND_INPUT};
  }

  button:nth-child(2){
    background:#AB4D55;
  }
`;


