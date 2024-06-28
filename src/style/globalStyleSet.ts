import styled from 'styled-components'
import Grid40 from '../assets/svg/grid_40.svg'
import dataVPageBg from '../assets/img/dataVPageBg.png'

export const LayoutStyle = styled.div`
    margin: 0 auto;
`

export const PageStyle = styled.div<{$isDataV?: boolean}>`
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    position: relative;
    padding: 0 0 50px 0;
    background-color: rgb(30, 35, 48);
    background-image: url(${Grid40});
    /* background-size: cover; */
    ${
        props => props.$isDataV && `
            background-image: url(${dataVPageBg});
            background-size: 100% 100%;
            background-repeat: no-repeat;
        `
    }    
`