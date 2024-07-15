import styled from "styled-components";
import boxBg from '../../assets/img/boxBg.png'
import boxLargeBg from '../../assets/img/boxLargeBg.png'
import boxHeightBg from '../../assets/img/boxHeightBg.png'
import boxLargestBg from '../../assets/img/boxLargestBg.png'
import boxHeaderBg from '../../assets/img/boxHeaderBg.png'
import boxHeaderLargeBg from '../../assets/img/boxHeaderLargeBg.png'
import boxHeaderLargestBg from '../../assets/img/boxHeaderLargestBg.png'
import iconCloseBlcak from '../../assets/img/icons/iconCloseBlcak.png'

interface BorderBoxStyleI {
    $height?: string;
    $width?: string;
    $size?: string
}

export const BorderBoxStyle = styled.div<BorderBoxStyleI>`
    --default-height: 284px;

    height: var(--default-height);
    background-image: url(${boxBg});
    background-repeat: no-repeat;
    background-size: 100% var(--default-height);

    ${props => props.$height && `
        height: ${props.$height}px;
        background-size: 100% ${props.$height}px;
    `}

    ${props => props.$width && `
        width: ${props.$width}px;
        background-size: ${props.$width}px ${props.$height || '294'}px;
    `}

    ${props => props.$size && props.$size === 'large' && `
        background-image: url(${boxLargeBg});
    `}

    ${props => props.$size && props.$size === 'largest' && `
        background-image: url(${boxLargestBg});
    `}
    ${props => props.$size && props.$size === 'height' && `
        background-image: url(${boxHeightBg});
    `}
`

export const BorderBoxHeaderStyle = styled.div<BorderBoxStyleI>`
    height: 57px;
    line-height: 57px;
    font-family: PingFang SC;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    padding-left: 38px;
    background-image: url(${boxHeaderBg});
    background-repeat: no-repeat;
    background-size: 95% 25px;
    background-position: 15px 32px;
    position: relative;

    ${props => props.$size && props.$size === 'large' && `
        background-image: url(${boxHeaderLargeBg});
    `}
    ${props => props.$size && props.$size === 'largest' && `
        background-image: url(${boxHeaderLargestBg});
    `}

    .MoreInfo{
        position: absolute;
        right: 5px;
        top: 0;
        padding-right: 44px;
        font-family: PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
        cursor: pointer;
        &::after {
            content: " ";
            display: inline-block;
            width: 8px;
            height: 12px;
            background-image: url(${iconCloseBlcak});
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            right: 25px;
            top: 22px;
        }
    }
`

export const BorderBoxContentStyle = styled.div`
    position: relative;
    width: 100%;
    height: calc(100% - 65px);
    padding: 10px;
    overflow: hidden;
`

