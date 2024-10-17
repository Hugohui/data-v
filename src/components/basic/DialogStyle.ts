import styled from "styled-components";
import dialogContentBg from '../../assets/img/dialogContentBg.png'
import iconClose from '../../assets/img/icons/iconClose.png'
import searchIcon from '../../assets/img/icons/search.png'

export const DialogStyle = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);

    .search {
        width: 185px;
        display: flex;
        position: absolute;
        top: 18px;
        right: 60px;
        height: 28px;
        border-radius: 14px;
        background-color: #112544;
        overflow: hidden;
        input {
            flex: 1;
            display: inline-block;
            height: 28px;
            line-height: 28px;
            padding: 2px 10px;
            border: none;
            background-color: transparent;
            color: #FFFFFF;
            font-size: 14px;
            &:focus, &:focus-visible{
                border: none;
                box-shadow: none;
                outline: none;
            }
            &::placeholder {
                font-size: 14px;
            }
            &:-internal-autofill-selected {
                box-shadow: none !important; // 改变了背景色
                /* -webkit-text-fill-color: #c0aefa; // 改变了字体颜色 */
            }
        }
        .searchIcon{
            display: inline-block;
            width: 40px;
            height: 16px;
            background-image: url(${searchIcon});
            background-size: 16px 100%;
            background-repeat: no-repeat;
            margin-top: 6px;
            cursor: pointer;
        }
    }
`

export const DialogBoxStyle = styled.div<{
    width?: number, 
    height?: number, 
    backgroundimag?: any
}>`
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

    ${ props => props.height && `
        height: ${props.height}px;
        margin-top: ${-props.height / 2}px;
    `}

    ${ props => props.backgroundimag && `
        background-image: url(${props.backgroundimag});
    `}
`

export const DialogHeaderStyle = styled.div<{title_align?: string, title_font_size?: number}>`
    height: 70px;
    line-height: 70px;
    font-family: PingFang SC;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    padding-left: 40px;
    position: relative;

    ${
        props => props.title_align && `
            text-align: ${props.title_align};
        `
    }

    ${
        props => props.title_font_size && `
            font-size: ${props.title_font_size}px;
        `
    }

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