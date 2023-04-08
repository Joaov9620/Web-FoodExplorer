import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0069d9;
  }
`;

export const Button = styled.span`
  cursor: pointer;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
  }
`;
