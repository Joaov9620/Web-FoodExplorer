import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    min-height: 100vh;


    >div{
        margin: auto;
    }

    .filter{
        display: flex;
        justify-content: space-between;
        margin: 35px auto;
    }

    .cards{
        display: flex;
        justify-content: center;
        /* overflow: hidden; */
        flex-wrap: wrap;
    }

`;