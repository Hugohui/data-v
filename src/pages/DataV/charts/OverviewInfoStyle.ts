import styled from "styled-components"
import DataVInfoItem from '../../../assets/img/dataVInfoItem.png'


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