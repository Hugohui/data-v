import styled from "styled-components";

export const VideoBoxStyle = styled.div<{$height?: string, $width?: string}>`
    background: #000000;
    opacity: 0.2;
    /* width: 530px; */
    /* height: 362px; */
    padding: 8px;

    /* ${props => props.$width && `
        width: ${props.$width}px
    `} */
    /* ${props => props.$height && `
        height: ${props.$height}px
    `} */

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
`


export const VideoItemStyle = styled.div<{$lineCont?: number}>`
    width: calc(100% / 2 - 12px);
    /* height: 165px; */
    background-color: #fff;
    border-radius: 4px;
    video {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    ${props => props.$lineCont && `
        width: calc(100% / ${props.$lineCont} - 12px);
    `}
`