import styled from "styled-components";

export const SheepInfoProgrssStyle = styled.div`
    margin: 0 auto;
    width: 560px;
    height: 35px;
    border: 2px solid #00A6BE;
    background-color: #002F78;
    border-radius: 18px;
    position: relative;
    padding: 2px;
    .textWrap {
        position: absolute;
        left: 0;
        bottom: -30px;
        width: 100%;
        color: #fff;
        display: flex;
        & > div {
            text-align: right;
            flex: 1;
            font-size: 16px;
            font-weight: bold;
            &:first-child {
                text-align: left;
            }
        }
    }
`

export const ProgrssStyle = styled.div<{progress?: Number}>`
    height: 100%;
    background: linear-gradient(90deg, #009398 0%, #00DEEE 100%);
    border-radius: 18px;
    width: 0px;
    ${
        props => props?.progress && `
            width: ${props?.progress}%;
        `
    }
`