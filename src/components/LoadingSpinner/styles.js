import styled, { keyframes } from 'styled-components';

// Define a animação do spinner
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`
;

// Estilos do spinner
export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;`
;

export const Spinner = styled.div`
  border: 4px solid #0D1D25; /* Cor da borda do spinner */
  border-top: 4px solid #000A0F; /* Cor da borda do topo do spinner */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 0.8s linear infinite; /* Aplica a animação */`
;
