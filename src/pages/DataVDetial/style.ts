import styled from "styled-components"
import DataVInfoItem from '../../assets/img/dataVInfoItem.png'

export const PageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`

export const PageLeftStyle = styled.div`
    width: 458px;
    height: auto;
`

export const PageCenterStyle = styled.div`
    flex: 1;
    align-items: center;
    padding: 0 13px;

    .VideoBoxStyle {
        height: 700px;
        gap: 13px;
        margin-top: 8px;
        .VideoItemStyle {
            height: 220px;
        }
    }    
`

export const PageMainInfoStyle = styled.div`
    height: 138px;
    justify-content: center;
    display: flex;
    gap: 10px;
`

export const PageRightStyle = styled.div`
    width: 458px;
    height: auto;
`