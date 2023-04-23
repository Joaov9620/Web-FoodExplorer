import styled from "styled-components";

export const Container = styled.h5`
    background: #192227;
    border-radius: 5px;
    padding: 4px 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
`;