import styled from "styled-components";
import headerBg from '../assets/img/headerBg.png'
import headerBgMenu from '../assets/img/headerBgMenu.png'

export const HeaderStyle  = styled.div<{$menu?: Boolean}>`
    height: 106px;
    /* line-height: 106px; */
    font-size: 36px;
    text-align: center;
    color: #fff;
    padding-top: 20px;
    background-image: url(${headerBg});
    background-size: 1365px 106px;
    background-repeat: no-repeat;
    background-position: center center;

    ${props => props.$menu && `
        background-image: url(${headerBgMenu});
    `}
    
`

export const HeaderTitle = styled.div`
    height: 35px;
    font-family: PangMenZhengDao-3;
    font-weight: bolder;
    font-size: 46px;
    color: #1DF0BC;
    margin-bottom: 9px;
    /* margin: 20px 0 9px 0; */
`

export const HeaderSubTitle = styled.div`
    height: 13px;
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
`