import styled from "styled-components";
import processRecordsLeft from '@/assets/img/processRecordsLeft.png';
import processRecordsRight from '@/assets/img/processRecordsRight.png';

export const ProcessRecordsStyle = styled.div`
    padding: 0 61px;
    overflow: auto;
    height: 100%;
    .timeline {
        min-height: 100%;
        padding: 20px 0;
    }

    .timeline::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 10px;
        width: 2px;
        min-height: 95%;
        background-color: #1DF0BC;
    }
    
    .timeline-item {
        position: relative;
        height: 48px;
        margin-bottom: 5px;
    }
    
    .timeline-content {
        position: relative;
        width: 108px;
        height: 48px;
        background-size: 100% 100%;
        padding: 7px 12px;

        &.foatRight {
            padding-left: 18px;
            float: right;
            background-image: url(${processRecordsRight});
            &::before {
                content: " ";
                position: absolute;
                top: 50%;
                right: 115px;
                margin-top: -1px;
                border-top: 1px dashed #1DEAB8;
                width: 62px;
            }
            &::after {
                content: " ";
                width: 6px;
                height: 6px;
                border: 2px solid #1DEAB8;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                right: 188px;
                margin-top: -5px;
                background-color: #13243B;
            }
        }
        &.foatLeft {
            float: left;
            background-image: url(${processRecordsLeft});
            &::before {
                content: " ";
                position: absolute;
                top: 50%;
                left: 115px;
                margin-top: -1px;
                border-top: 1px dashed #1DEAB8;
                width: 62px;
            }
            &::after {
                content: " ";
                width: 6px;
                height: 6px;
                border: 2px solid #1DEAB8;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 190px;
                margin-top: -5px;
                background-color: #13243B;
            }
        }

        p {
            color: #fff;
            font-size: 14px;
            &:first-child {
                margin-bottom: 6px;
            }
        }
    }
`