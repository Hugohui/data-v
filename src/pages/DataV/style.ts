import styled from "styled-components"
import DataVInfoItem from '../../assets/img/dataVInfoItem.png'

export const PageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`

export const PageLeftStyle = styled.div`
    width: 458px;
    height: auto;
`

export const PageCenterStyle = styled.div`
    flex: 1;
    align-items: center;
`

export const PageCenterMainStyle = styled.div`
    height: 724px;
`

export const PageCenterInfoStyle = styled.div`
    height: 127px;
    display: flex;
    justify-content: center;
    gap: 29px;
`

export const InfoItemStyle = styled.div`
    width: 198px;
    height: 127px;
    background-image: url(${DataVInfoItem});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    padding-top: 35px;

    .Num {
        font-family: DIN;
        font-weight: bold;
        font-size: 40px;
        color: #04DEA8;
        margin-bottom: 13px;
    }
    .Text {
        font-family: PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
    }
`

export const PageRightStyle = styled.div`
    width: 458px;
    height: auto;
`