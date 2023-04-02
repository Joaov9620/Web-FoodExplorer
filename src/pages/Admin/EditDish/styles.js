// import styled from "styled-components";

// export const Container = styled.div`
//     width: 100%;
//     height: 100vh;

//     display: grid;
//     grid-template-rows: 9.6rem auto 7.7rem;
//     grid-template-areas: 
//     "header"
//     "content"
//     "footer";
// `;

// export const Content = styled.div`
//     grid-area: content;
//     padding: 3.2rem 12.3rem;
// `;

// export const InputsLabel = styled.div`
//     display: grid;
//     gap: 3.2rem;
//     margin-top: 3.2rem;

// `;

// export const Frame01 = styled.div`
//     width: 100%;
//     display:flex;
//     gap: 3.2rem;

//     >label{
//         display: grid;
//         gap: 2rem;
//     }

//     >label input{
//         background: #0D161B;
//     }

//     >label:nth-child(1) {
//         width: 20%;
//     }

//     >label:nth-child(2) {
//         width: 50%;
//     }

//     >label:nth-child(3) {
//         width: 30%;
//     }

//     >label:nth-child(1) div{
//         background: #0D161B;
//         border-radius: 8px;
//     }
// `;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 9.6rem auto 7.7rem;
  grid-template-areas: 
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
  grid-area: content;
  padding: 3.2rem 12.3rem;
`;

export const InputsLabel = styled.div`
  display: grid;
  gap: 3.2rem;
  margin-top: 3.2rem;
`;

export const Frame01 = styled.div`
  width: 100%;
  display: flex;
  gap: 3.2rem;

  > label {
    display: grid;
    gap: 2rem;
    align-items: center;
  }

  > label input[type="text"], select {
    background-color: #0d161b;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1.6rem;
    padding: 1.2rem;
    width: 100%;
  }

  > label:nth-child(1) {
    width: 20%;
  }

  > label:nth-child(2) {
    width: 50%;
  }

  > label:nth-child(3) {
    width: 30%;
  }

  > label:nth-child(1) div {
    background: #0D161B;
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

export const Ingredients = styled.div`
  > h2 {
    font-size: 2.4rem;
    margin-bottom: 1.2rem;
  }
`;

export const IngredientItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 0.8rem;
`;

export const IngredientName = styled.p`
  font-size: 1.6rem;
`;

export const RemoveIngredientButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const AddIngredientButton = styled.button`
  background-color: #0d161b;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.6rem;
  padding: 1.2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;
