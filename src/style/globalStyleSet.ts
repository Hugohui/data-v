import styled from 'styled-components'
import pageBg from '../assets/img/pageBg.png'
import Grid40 from '../assets/svg/grid_40.svg'

export const LayoutStyle = styled.div`
    margin: 0 auto;
`

export const PageStyle = styled.div`
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    position: relative;
    padding: 10px 0 50px 0;
    background-color: rgb(30, 35, 48);
    /* background: url(${pageBg}) center center no-repeat; */
    background-image: url(${Grid40});
    /* background-size: cover; */

    
`