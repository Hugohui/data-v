import styled from 'styled-components'
import indexPageBg from '../../assets/img/indexPageBg.png';
import indexEnterDialog from '../../assets/img/indexEnterDialog.png'

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
    /* padding: 600px 6px 0 6px; */
    .enterDialog {
        position: absolute;
        left: 951px;
        top: 158px;
        width: 362px;
        height: 290px;
        background-image: url(${indexEnterDialog});
        background-size: cover;
        background-repeat: no-repeat;
        .name {
            position: absolute;
            bottom: 20px;
            left: -46px;
            font-family: PingFang SC;
            font-weight: bold;
            font-size: 16px;
            color: #76DDFE;
        }
        .info {
            padding: 15px 10px 10px 10px;
            width: 200px;
            position: absolute;
            right: 0;
            top: 0;
            font-family: PingFang SC;
            font-weight: 400;
            font-size: 15px;
            color: #FFFFFF;
            div {
                height: 32px;
                line-height: 24px;
            }
            span {
                display: inline-block;
                width: 60px;
            }
            
        }
        .enter {
            width: 160px;
            height: 30px;
            position: absolute;
            top: 118px;
            right: 25px;
            cursor: pointer;
        }
    }

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
    & > div {
        margin-bottom: 6px;
    }
    & > div:last-child {
        margin-bottom: 0;
    }
`