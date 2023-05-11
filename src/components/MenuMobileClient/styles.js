import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    min-height: 100vh;

    backdrop-filter: blur(75px); 
   position: absolute;
   z-index: 2;
   top: 0;
   left: 0;
    transform: translate(0px);

   >div:nth-child(2){
    margin: 40px 28px;
   }

   .buttonMenuHeader{
    height: 114px;
    width: 100%;
    background: #00111A;
    padding:56px 28px 24px;
   }

   .buttonMenuHeader button{
        font-weight: 400;
        font-size: 22px;
        line-height: 25px;
   }

   .buttonsMenu{
    /* width: 372px; */
    margin: 36px auto;
    display: flex;
    flex-direction: column; 

   }

   .buttonsMenu button{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        border-bottom: 1px solid #192227;
        padding: 10px;
    }

    .buttonsMenu :hover{
        background: #000A0F;
    }
`;

export const SearchMobile = styled.div`
    margin: 36px auto 0;
    >div{
        width: 100%
    }
`;