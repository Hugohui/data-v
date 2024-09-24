import styled from 'styled-components'
import indexPageBg from '../../assets/img/indexPageBg.png';

export const PageIndexStyle = styled.div`
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    position: relative;
    /* padding: 0 0 50px 0; */
    /* background-color: red; */
    background-color: rgb(30, 35, 48);
    /* background-image: url(${indexPageBg}); */
    background-size: cover;
    background-repeat: no-repeat;
`

export const IndexContentStyle = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
`

export const IndexPageContent = styled.div`
  /* display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: 15px;
  padding: 0 30px; */
`

export const PageLeftStyle = styled.div`
    position: absolute;
    left: 30px;
    top: 126px;
    width: 458px;
    height: auto;
    gap: 6px;
    z-index: 999;
    & > div {
        margin-bottom: 6px;
    }
    & > div:last-child {
        margin-bottom: 0;
    }
`

export const PageCenterStyle = styled.div`
    width: 928px;
    position: absolute;
    bottom: 62px;
    left: 50%;
    transform: translateX(-50%);
    flex: 1;
    align-items: center;
    z-index: 998;

    .FeedUsageLine {
        .BoxContent {
            .default-chart {
                /* height: calc(100% - 24px) !important; */
            }
        }
    }
`

export const PageRightStyle = styled.div`
    position: absolute;
    top: 126px;
    right: 30px;
    width: 458px;
    height: auto;
    z-index: 999;
    & > div {
        margin-bottom: 6px;
    }
    & > div:last-child {
        margin-bottom: 0;
    }
`


export const EnterPastureStyle = styled.div`
    width: 400px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    margin: 0 auto;
    cursor: pointer;
`