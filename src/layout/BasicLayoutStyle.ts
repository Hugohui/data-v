import styled from "styled-components";
import goHomeBg from '../assets/img/goHomeBg.png'
import goBackBg from '../assets/img/goBackBg.png'

export const CurrentViewStyle =  styled.div`
    text-align: center;
    height: 32px;
    line-height: 32px;
    color: #fff;
    font-size: 15px;
    margin-top: 13px;
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
    background-image: url(${goHomeBg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    & > div {
        width: 100%;
        height: 100%
    }
`