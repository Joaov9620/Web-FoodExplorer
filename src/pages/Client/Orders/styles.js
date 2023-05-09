import styled from "styled-components";

export const Content = styled.div`
    height: calc(100vh - 175px);
    padding: 35px 28px;

    >h1{
        margin-bottom: 35px;
        font-size: 35px;
    }
`;

export const Table = styled.table`
    width: 100%;
    border: 2px solid #1E1E1E;
    border-radius: 8px;

    >tr td,th{
        border: 2px solid #1E1E1E;
        text-align: start;
    }

    >tr th{
        padding: 21px 24px;
    }

    >tr td{
        padding: 16px 24px;
    }
`;
