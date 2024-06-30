import styled from "styled-components"
import feedingInfoBg from '../../assets/img/feedingInfoBg.png'
import feedingInfoLineBg from '../../assets/img/feedingInfoLineBg.png'

export const PageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`

export const PageLeftStyle = styled.div`
    width: 540px;
    height: auto;
    gap: 6px;
    & > div {
        margin-bottom: 6px;
    }
    & > div:last-child {
        margin-bottom: 0;
    }
`

export const PageRightStyle = styled.div`
    flex: 1;
    padding: 0 10px;
`

export const PageRightFeedPlanStyle = styled.div`
    height: 105px;
    background-image: url(${feedingInfoBg});
    background-size: 100% 100%;
    background-repeat:no-repeat;
    padding: 5px;
`

export const PageRightFeedBottomStyle = styled.div`
    margin-top: 10px;
    display: flex;
    .bottomLeft {
        width: 744px;
        height: 740px;
        padding: 26px;
        background-image: url(${feedingInfoLineBg});
        background-size: 100% 100%;
        background-repeat:no-repeat;
        .funnel {
            height: 350px;
        }
        .planLine {
            padding-top: 30px;
            padding-bottom: 20px;
            height: 365px;
            border-top: 1px solid #194E4F;
        }
    }
    .bottomRight {
        flex: 1;
        padding-left: 10px;
        .rightTop{
            height: 362px;
            .VideoBoxStyle {
                gap: 14px;
                padding: 11px 14px;
                .VideoItemStyle {
                    height: 165px;
                }
            }
            
        }
        .rightBottom {
            height: 368px;
            margin-top: 10px;
        }
    }
`