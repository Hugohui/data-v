import styled from "styled-components";

export const InfoItemStyle = styled.div`
    width: 33.33%;
    float: left;
    text-align: center;

    &:nth-child(n + 4) {
        padding-top: 10px;
    }
`
export const InfoItemNumStyle = styled.div`
    font-family: DIN;
    font-weight: bold;
    font-size: 32px;
    color: #04DEA8;
    margin: 25px 0 13px 0;
`
export const InfoItemTexttyle = styled.div`
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
`