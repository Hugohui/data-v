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
    height: 505px;
    background-image: url(${WeighInfoBg});
    background-size: 562px 355px;
    background-position: 73px 150px;
    background-repeat: no-repeat;
    padding-top: 30px;
`

export const PageRightStyle = styled.div`
    width: 570px;
    height: auto;

    .GaugeBox{
        padding: 0 20px;
        .GaugeBoxItem {
            float: left;
            width: 33.33%;
            height: 100%;
        }
    }
`