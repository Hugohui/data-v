import styled from "styled-components";
import footerBg from '../assets/img/footerBg.png'

export const FooterStyle  = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 60px;
    text-align: center;
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    background-image: url(${footerBg});
    background-size: 984px 50px;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 999;
`