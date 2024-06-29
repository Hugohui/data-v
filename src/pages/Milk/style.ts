import styled from "styled-components"

export const PageContent = styled.div`

`

export const PageTopStyle = styled.div`
    height: 80px;
    border: 1px solid #00FFC6;
    display: flex;
    padding: 19px 0;

    .InfoItem {
        flex: 1;
        height: 41px;
        line-height: 32px;
        border-left: 1px solid #267F7E;
        font-family: PingFang SC;
        font-weight: 400;
        font-size: 18px;
        color: #FDFDFD;
        padding-left: 30px;

        &:first-child {
            border: none;
        }

        & > div {
            display: inline-block;
        }

        .Num {
            font-family: DIN;
            font-weight: bold;
            font-size: 32px;
            color: #1DF0BC;
            margin: 0 14px 0 12px;
        }
        .Unit{
            color: #FFF;
            font-weight: bold;
        }
    }
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