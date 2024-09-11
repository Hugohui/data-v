import styled from "styled-components";
import dialogContentBg from '../../assets/img/dialogContentBg.png'
import iconClose from '../../assets/img/icons/iconClose.png'

export const DialogStyle = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);
`

export const DialogBoxStyle = styled.div<{width?: number}>`
    width: 1108px;
    height: 568px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -554px;
    margin-top: -284px;
    background-image: url(${dialogContentBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    ${ props => props.width && `
        width: ${props.width}px;
        margin-left: ${-props.width / 2}px;
    `}
`

export const DialogHeaderStyle = styled.div`
    height: 70px;
    line-height: 70px;
    font-family: PingFang SC;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    padding-left: 40px;
    position: relative;

    .close {
        position: absolute;
        width: 24px;
        height: 24px;
        right: 20px;
        top: 20px;
        background-image: url(${iconClose});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
    }
`
export const DialogContentStyle = styled.div`
    padding: 30px;
    height: calc(100% - 70px);
`