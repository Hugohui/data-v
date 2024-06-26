import styled from 'styled-components'
import indexPageBg from '../../assets/img/indexPageBg.png';

export const PageIndexStyle = styled.div`
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    position: relative;
    padding: 0 0 50px 0;
    background-color: rgb(30, 35, 48);
    background-image: url(${indexPageBg});
    background-size: cover;
    background-repeat: no-repeat;
`

export const IndexPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: 15px;
  padding: 0 30px;
`

export const PageLeftStyle = styled.div`
    width: 458px;
    height: auto;
    gap: 6px;
    & > div {
        margin-bottom: 6px;
    }
    & > div:last-child {
        margin-bottom: 0;
    }
`

export const PageCenterStyle = styled.div`
    flex: 1;
    align-items: center;
    padding: 600px 6px 0 6px;
`

export const PageRightStyle = styled.div`
    width: 458px;
    height: auto;
    & > div {
        margin-bottom: 6px;
    }
    & > div:last-child {
        margin-bottom: 0;
    }
`