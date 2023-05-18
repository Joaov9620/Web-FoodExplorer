import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    >.logo{
        padding:0 16px;
    }

    @media(min-width:850px) {
       flex-direction: row;
       
        .logo{
            flex: 1;
            display: flex;
            justify-content: center;
        }

        .Form{
            flex: 1;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
            margin-right: 10.8rem;

            >h1{
                display: block;
            }
        }
    }
`;

export const Form = styled.form`
    max-width: 48rem;
    max-height: 62rem;
    padding: 6.4rem;
    border-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    >h1{
        display: none;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
    }

    >label{
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: #C4C4CC;

        input{
            border: 1px solid ;
            border-radius: 8px;
            text-align: start;
        }
    }

    >button, a{
        text-align: center;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: white;
    }
    >button{
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

`;

