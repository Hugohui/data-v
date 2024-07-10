import styled from "styled-components";

export const AmapContainerStyle = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

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
        height: 120px;
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