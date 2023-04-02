import styled from "styled-components";

export const HeaderBody = styled.header`
    grid-area: header;
    width: 100%;
    background: #00111A;
    height: 114px;

    .menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 56px 28px 28px;;
    }

    .menu button, .ordersDesktop{
        display: none;
    }

    >button{
        font-weight: 500;
        font-size: 1.4REM;
        line-height: 2.4REM;
        color:  ${({theme}) => theme.COLORS.WHITE};
    }

    @media(max-width:850px){
        .searchMobile{
            display: none;
        }
    }

    @media(max-width:850px){
        .menuMobile{
            height: 96px;
        }
        
        .menu{
            padding: 28px 24px;
        }

        .searchMobile2{
            display: none;
        }

        .logoHeader{
            flex-direction: column;
            align-items: flex-end;
        }
    }

    @media(min-width: 1290px){
        .buttonMenu, .orders{
            display: none;
        }

        .menu button, .logoutHeader, .ordersDesktop{
            display: block;
        }
    }
`;

export const MenuMobile = styled.div`
    display: none;
   backdrop-filter: blur(75px); 
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;

   img{
    padding: 28px 24px;
   }

   >.buttonsMenu{
    width: 372px;
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
`;

export const LogoMobile = styled.div`
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

export const SearchMobile = styled.div`
    width: 518px;

    .orders{
        display: flex;
        gap: 32px;
    }
`;

export const SearchMobile2 = styled.div`
    width: 372px;
    margin: 36px auto 0;
`;

export const Logout = styled.button`
    display: none;
    background: none;
    border: none;
`;