import styled from "styled-components";
import boxBg from '../../assets/img/boxBg.png'
import boxLargeBg from '../../assets/img/boxLargeBg.png'
import boxHeaderBg from '../../assets/img/boxHeaderBg.png'
import boxHeaderLargeBg from '../../assets/img/boxHeaderLargeBg.png'

interface BorderBoxStyleI {
    $height?: string;
    $width?: string;
    $size?: string
}

export const BorderBoxStyle = styled.div<BorderBoxStyleI>`
    --default-height: 294px;

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

    ${props => props.$size && props.$size === 'large' && `
        background-image: url(${boxHeaderLargeBg});
    `}
`

export const BorderBoxContentStyle = styled.div`

`

