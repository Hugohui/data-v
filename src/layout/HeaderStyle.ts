import styled from "styled-components";
import headerBg from '../assets/img/headerBg.png'
import headerBgMenu from '../assets/img/headerBgMenu.png'
import headerTitle from '../assets/img/headerTitle.png'

export const HeaderStyle  = styled.div<{$menu?: Boolean, $isDataV?: Boolean}>`
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

    ${props => (!props.$menu || props.$isDataV) && `
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 999;
    `}

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
    background-image: url(${headerTitle});
    background-size: 486px 35px;
    background-position: center center;
    background-repeat: no-repeat;
    /* margin: 20px 0 9px 0; */
`

export const HeaderSubTitle = styled.div`
    height: 13px;
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
`