import styled from "styled-components";

export const SheepInfoCardStyle = styled.div`
    padding: 22px;
    display: flex;
`

export const CardLeftStyle = styled.div`
    color: #fff;
    font-size: 16px;
    p {
        margin-bottom: 25px;
        span {
            padding: 2px 10px;
            font-size: 12px;
            color: #fff;
            border-radius: 2px;
            vertical-align: top;
            &.healthy {
                background-color: rgba(97, 206, 119);
            }
            &.warning {
                background-color: rgba(98, 158, 235);
            }
            &.danger {
                background-color: rgba(238, 117, 113);
            }
        }
    }
    flex: 1;
`

export const CardRightStyle = styled.div`
    /* flex: 1; */
    width: 242px;
    height: 254px;
    vertical-align: middle;
    text-align: center;
    background-color: #000;
    border-radius: 10px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 10px;
        overflow: hidden;
    }
`