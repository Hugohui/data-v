import styled from "styled-components"

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
    padding: 10px;
`

export const PageRightFeedPlanStyle = styled.div`
    height: 95px;
    background: #112544;
    border: 1px solid #00FFC6;
`

export const PageRightFeedBottomStyle = styled.div`
    margin-top: 10px;
    display: flex;
    .bottomLeft {
        width: 744px;
        height: 736px;
        border: 1px solid #00FFC6;
        opacity: 0.5;
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