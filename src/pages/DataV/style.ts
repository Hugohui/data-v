import styled from "styled-components"
// import dataVPageBg from '@/assets/img/dataVPageBg.png'
import dataVPageBg from '@/assets/img/dataVPageBg.jpg'

export const PageBGStyle = styled.div`
    width: 100%;
    height: 100%;
    /* background-image: url(${dataVPageBg}); */
    background-size: 100% 100%;
    background-repeat: no-repeat;
`

export const PageContent = styled.div`
    width: 1920px;
    height: 1080px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #14182C;
    .react-transform-wrapper, .react-transform-component {
        width: 100%;
        height: 100%;
    }
`

export const PageLeftStyle = styled.div`
    position: absolute;
    top: 160px;
    left: 30px;
    width: 458px;
    height: auto;
`

export const PageCenterStyle = styled.div`
    flex: 1;
    align-items: center;
`

export const PageCenterMainStyle = styled.div`
    height: 724px;
`

export const PageCenterInfoStyle = styled.div`
    position: absolute;
    bottom: 68px;
    left: 50%;
    transform: translateX(-50%);
    width: 943px;
    height: 127px;
    display: flex;
    justify-content: center;
    gap: 29px;
`

export const PageRightStyle = styled.div`
    position: absolute;
    top: 160px;
    right: 30px;
    width: 458px;
    height: auto;
`