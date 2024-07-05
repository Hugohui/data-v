import styled from "styled-components";
import indexEnterDialog from '@/assets/img/indexEnterDialog.png'

export const EnterDialogStyle = styled.div<{$top?: number, $left?: number}>`
    .enterDialog {
        position: absolute;
        left: 951px;
        top: 158px;
        width: 362px;
        height: 290px;
        background-image: url(${indexEnterDialog});
        background-size: cover;
        background-repeat: no-repeat;

        ${ props => props.$top && `
            top: ${props.$top}px;
        `}

        ${ props => props.$left && `
            left: ${props.$left}px;
        `}

        .name {
            position: absolute;
            bottom: 20px;
            left: -46px;
            font-family: PingFang SC;
            font-weight: bold;
            font-size: 16px;
            color: #76DDFE;
        }
        .info {
            padding: 15px 10px 10px 10px;
            width: 200px;
            position: absolute;
            right: 0;
            top: 0;
            font-family: PingFang SC;
            font-weight: 400;
            font-size: 15px;
            color: #FFFFFF;
            div {
                height: 32px;
                line-height: 24px;
            }
            span {
                display: inline-block;
                width: 60px;
            }
            
        }
        .enter {
            width: 160px;
            height: 30px;
            position: absolute;
            top: 118px;
            right: 25px;
            cursor: pointer;
        }
    }
`