import styled from "styled-components";
import iconTime from '../assets/img/iconTime.png'
import iconWeather from '../assets/img/iconTime.png' // 需要切图

export const HeaderInfoStyle = styled.div`
    position: fixed;
    left: 0;
    top: 13px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    display: flex;
    padding: 0 30px;
    div {
        flex: 1;
        font-family: PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        .icon {
            display: inline-block;
            width: 30px;
            height: 30px;
            vertical-align: top;
            background-size: cover;
            background-repeat: no-repeat;
            img {
                display: inline-block;
                width: 30px;
                height: 30px;
                fill: '#fff';
            }
        }
        &.weather {
            text-align: left;
            /* .icon {
                background-image: url(${iconWeather})
            } */
            .status {
                margin-right: 20px;
            }
        }
        &.time {
            text-align: right;
            .icon {
                margin-right: 10px;
                background-image: url(${iconTime})
            }
            .timeNow {
                display: inline-block;
                width: 240px;
                text-align: left;
            }
        }
    }
`