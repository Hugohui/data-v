import styled from "styled-components";
import SheePedigreeBg from '@/assets/img/SheePedigreeBg.png'
import IndexPageMapLeftLine from '@/assets/img/IndexPageMapLeftLine.png'
import IndexPageMapTopLine from '@/assets/img/IndexPageMapTopLine.png'

export const AmapContainerStyle = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    .SheePedigreeBg {
        width: 435px;
        height: 439px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
        background-image: url(${SheePedigreeBg});
    }

    .enter {
        width: 90%;
        height: 30px;
        line-height: 30px;
        position: absolute;
        bottom: 23px;
        right: 25px;
        cursor: pointer;
        text-align: center;
    }

    .info {
        width: 435px;
        height: 340px;
        color: #fff;
        position: absolute;
        right: 0;
        top: 50px;
        line-height: 32px;
        padding: 15px 10px 10px 10px;
        user-select: none;
    }

    .header {
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        color: #fff;
        font-weight: bolder;
        position: relative;
    }

    .graphLoading {
        text-align: center;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
    }

    .fullSpan {
        position: absolute;
        right: 10px;
        top: 15px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .topLine {
        width: 150px;
        height: 1PX;
        border-top: 1PX solid #00DDEA;
        position: absolute;
        bottom: 110px;
        left: -150px;
        background-image: url(${IndexPageMapTopLine});
    }

    .leftLine {
        width: 1PX;
        height: 60px;
        border-left: 1PX solid #00DDEA;
        position: absolute;
        bottom: 50px;
        left: -150px;
        background-image: url(${IndexPageMapLeftLine});
    }

    .mapLoading {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #1B2738;
        color: #fff;
        font-size: 36px;
        z-index: 998;
        left: 0;
        top: 0;
        .loading {
            position: absolute;
            top: 370px;
            left: 50%;
            transform: translateX(-50%);
            color: #fff;
            font-size: 18px;

            .loader {
                border-top: 4px solid #3498db; /* 顶部边框颜色为自定义颜色 */
                border-left: 4px solid #3498db; /* 顶部边框颜色为自定义颜色 */
                border-radius: 50%; /* 圆形转圈 */
                width: 40px; /* 宽度 */
                height: 40px; /* 高度 */
                animation: spin 2s linear infinite; /* 动画效果 */
                margin: 0 auto;
                margin-bottom: 20px;
            }
        }
        
        @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        }
    }

    &::after {
        content: " ";
        display: inline-block;
        height: 120px;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(to bottom, #1B2738, transparent);
        z-index: 998;
    }

    &::before {
        content: " ";
        display: inline-block;
        height: 365px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        background-image: linear-gradient(to top, #1B2738, transparent);
        z-index: 998;
    }

    .amapContainer::after {
        content: " ";
        display: inline-block;
        height: 100%;
        width: 488px;
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(to right, #1B2738, transparent);
        z-index: 998;
    }

    .amapContainer::before {
        content: " ";
        display: inline-block;
        height: 100%;
        width: 488px;
        position: absolute;
        right: 0;
        top: 0;
        background-image: linear-gradient(to left, #1B2738, transparent);
        z-index: 998;
    }
`