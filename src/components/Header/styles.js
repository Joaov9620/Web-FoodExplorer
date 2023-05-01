import styled from "styled-components";

export const HeaderBody = styled.header`
    grid-area: header;
    width: 100%;
    background: #00111A;
    height: 114px;

    /* .menuMobile{
        display: hidden;
    } */

    .newDish, .ordersDesktop{
        display: none;
    }

    .newDish{
        font-weight: 500;
        font-size: 1.4REM;
        line-height: 2.4REM;
        color:  ${({theme}) => theme.COLORS.WHITE};
        background:  ${({theme}) => theme.COLORS.BACKGROUND_BUTTON_RED};
    }

    @media(max-width:850px){
        .menuMobile{
            height: 96px;
        }
        
        .menu{
            padding: 28px 24px;
        }

        /* .searchMobile2{
            display: none;
        } */

        .logoHeader{
            flex-direction: column;
            align-items: flex-end;
        }
    }

    @media(max-width:1050px){
        .search{
            display: none;
        }
    }

    @media(min-width: 1290px){
        .buttonMenuDesktop, .orders{
            display: none;
        }

        .menu button, .logoutHeader, .ordersDesktop{
            display: block;
        }
    }
`;

export const MenuDesktop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 28px;
    /* display: none; */

    >div button{
        background: transparent;
        border: none;
    }
`;

export const MenuMobile = styled.div`
   backdrop-filter: blur(75px); 
   position: absolute;
   z-index: 2;
   top: 0;
   left: 0;
   width: 100%;
   min-height: 100vh;
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

export const Logo = styled.div`
    display: flex;
    align-items: center;

    div h1{
        font-size: 21px;
    }

    span{
        margin-left: 8px;
        font-size: 1.2rem;
        line-height: 160%;
        color: #82F3FF;
    }
`;

export const Search = styled.div`
    width: 518px;

    >div{
        margin-top: 0;
    }
`;

export const SearchMobile = styled.div`
    margin: 36px auto 0;
    >div{
        width: 100%
    }
`;

export const Logout = styled.button`
    display: none;
    background: none;
    border: none;
`;