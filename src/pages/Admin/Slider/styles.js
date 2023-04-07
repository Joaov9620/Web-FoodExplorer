import styled from 'styled-components';

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

export const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
`;

export const SliderItem = styled.div`
  flex-shrink: 0;
  width: 200px;
  margin-right: 10px;

  img {
    width: 100%;
  }
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`;
