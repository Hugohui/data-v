import styled from "styled-components";
import iconVideoPlay from '@/assets/img/icons/iconVideoPlay.png'

export const VideoBoxStyle = styled.div<{$height?: string, $width?: string}>`
    background: rgba(0, 0, 0, 0.2);
    padding: 8px;

    /* ${props => props.$width && `
        width: ${props.$width}px
    `} */
    /* ${props => props.$height && `
        height: ${props.$height}px
    `} */

    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 8px;
`


export const VideoItemStyle = styled.div<{$lineCont?: number}>`
    position: relative;
    width: calc(100% / 2 - 12px);
    /* height: 165px; */
    background-color: #000;
    border-radius: 4px;
    overflow: hidden;
    video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        /* filter: brightness(200%); */
        cursor: pointer;
    }
    ${props => props.$lineCont && `
        width: calc(100% / ${props.$lineCont} - 12px);
    `}

    .VideoCover {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99;
        span {
            display: inline-block;
            width: 65px;
            height: 65px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-image: url(${iconVideoPlay});
            background-repeat: no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
        }
    }
`