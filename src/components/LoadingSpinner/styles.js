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
  border: 4px solid #f3f3f3; /* Cor da borda do spinner */
  border-top: 4px solid #3498db; /* Cor da borda do topo do spinner */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 0.8s linear infinite; /* Aplica a animação */`
;
