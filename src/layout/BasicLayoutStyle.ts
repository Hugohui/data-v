import styled from "styled-components";
import goHomeBg from '../assets/img/goHomeBg.png'
import goBackBg from '../assets/img/goBackBg.png'
import iconCurrentFarm from '../assets/img/icons/iconCurrentFarm.png'

export const CurrentViewStyle =  styled.div<{$isDataV?: Boolean}>`
    text-align: center;
    height: 32px;
    line-height: 32px;
    color: #fff;
    font-size: 15px;
    margin-top: 13px;

    ${
        props => props.$isDataV && `
            width: 100%;
            position: absolute;
            top: 106px;
            left: 0;
            z-index: 999;
        `
    }

    span {
        display: inline-block;
        vertical-align: top;
        width: 22px;
        height: 22px;
        background-image: url(${iconCurrentFarm});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-top: 3px;
        margin-right: 5px;
    }
`

export const MainStyle = styled.main`
    padding: 8px 30px 17px 30px;
`


export const GoBackStyle = styled.div`
    position: fixed;
    top: 89px;
    left: 0;
    width: 73px;
    height: 38px;
    background-image: url(${goBackBg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    & > div {
        width: 100%;
        height: 100%
    }
`

export const GoHomeStyle = styled.div`
    position: fixed;
    top: 89px;
    right: 0;
    width: 114px;
    height: 44px;
    z-index: 999;
    background-image: url(${goHomeBg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    & > div {
        width: 100%;
        height: 100%
    }
`