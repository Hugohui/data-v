import styled from "styled-components"

export const PageContent = styled.div`

`

export const PageTopStyle = styled.div`
    height: 80px;
    border: 1px solid #00FFC6;
    opacity: 0.5;
`

export const PageMiddleStyle = styled.div`
    margin: 7px 0;
    display: flex;
    gap: 9px;
    & > div {
        flex: 1;
    }
`

export const PageBottomStyle = styled.div`
    display: flex;
    gap: 9px;
    & > div {
        flex: 1;
    }
`