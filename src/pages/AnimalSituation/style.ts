import styled from "styled-components"

export const PageContent = styled.div`

`

export const PageTopStyle = styled.div`
    margin-bottom: 7px;
    display: flex;
    gap: 9px;
    & > div {
        flex: 1;
    }

    .DungClearBox{
        padding: 0 20px;
        .DungClear {
            float: left;
            width: 33.33%;
            height: 100%;
        }
    }
`

export const PageBottomStyle = styled.div`
    display: flex;
    gap: 9px;
    & > div {
        flex: 1;
    }
`