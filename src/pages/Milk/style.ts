import styled from "styled-components"
import mildInfoBg from '../../assets/img/milkInfoBg.png'

export const PageContent = styled.div`
`

export const PageTopStyle = styled.div`
    height: 80px;
    display: flex;
    padding: 19px 0;
    background-image: url(${mildInfoBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;

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
            span {
                vertical-align: middle;
            }
        }
        .Unit{
            color: #FFF;
            font-weight: bold;
        }
    }
`

export const PageMiddleStyle = styled.div`
    margin: 9px 0;
    gap: 9px;
    display: flex;
`

export const MilkVideoStyle = styled.div`
    flex: 1;
    .VideoBoxStyle {
        height: 100%;
        .VideoItemStyle {
            height: 156px;
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