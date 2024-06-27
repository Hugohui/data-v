import styled from 'styled-components'
import WeighInfoBg from '../../assets/img/weighInfoBg.png'
import WeighInfoItem from '../../assets/img/WeighInfoItem.png'

export const PageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`

export const PageLeftStyle = styled.div`
    width: 570px;
    height: auto;
`

export const PageCenterStyle = styled.div`
    flex: 1;
`

export const InfoBoxStyle = styled.div`
    width: 100%;
    height: 426px;
    background-image: url(${WeighInfoBg});
    background-size: 562px 355px;
    background-position: 73px 73px;
    .infoBox {
        width: 100%;
        height: 100%;
        position: relative;
        padding: 18px;
        & > div {
            width: 136px;
            height: 100px;
            padding: 16px 12px;
            background-image: url(${WeighInfoItem});
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            font-family: PingFang SC;
            font-weight: 400;
            font-size: 15px;
            color: #FFFFFF;
            p {
                margin-bottom: 13px;
            }

            &.info1 {
                left: 30px;
            }

            &.info2 {
                right: 30px;
            }
            &.info3 {
                left: 30px;
                top: 161px;
            }
            &.info4 {
                right: 30px;
                top: 161px;
            }
        }
    }
`

export const PageRightStyle = styled.div`
    width: 570px;
    height: auto;
`