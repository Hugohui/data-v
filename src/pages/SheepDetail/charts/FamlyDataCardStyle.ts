import styled from "styled-components";
import famlySelfIcon from "@/assets/img/icons/famlySelfIcon.png";
import famlyFatherIcon from "@/assets/img/icons/famlyFatherIcon.png";
import famlyGradFaIcon from "@/assets/img/icons/famlyGradFaIcon.png";

export const FamlyDataCardStyle = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 15px;
    display: flex;
    & > div {
        flex: 1;
        display: flex;
        align-items: center;

        &:last-child {
            flex: 2;
            display: grid;
            & > div {
                display: flex;
                align-items: center;
            }
        }

        .line {
            position: relative;
            width: 20px;
            height: 211px;
            border: 1px solid #fff;
            border-right: none;
            &::after {
                content: " ";
                position: absolute;
                left: -27px;
                top: 50%;
                width: 27px;
                border-top: 1px solid #fff;
            }

            &.fatherLine {
                position: relative;
                height: 126px;
                .card {
                    position: absolute;
                    top: 0;
                    right: -150px;

                    &:first-child {
                        top: -30px;
                    }
                    &:last-child {
                        top: 70px;
                    }
                }
            }
        }
    }
    .card {
        width: 73px;
        height: 68px;
        background-size: 100% 100%;
        margin-right: 47px;
        margin-left: 20px;
        text-align: center;
        padding: 10px 0;
        &.self {
            background-image: url(${famlySelfIcon});
            color: #2592FE;
            font-size: 22px;
        }
        &.father {
            background-image: url(${famlyFatherIcon});
            color: #795FE6;
            font-size: 18px;
            margin-right: 60px;
        }
        &.gradFather {
            background-image: url(${famlyGradFaIcon});
            color: #52C8A9;
            font-size: 16px;
        }

        .num {
            height: 14px;
            line-height: 12px;
            font-size: 14px;
            color: #fff;
        }

        .name {
            padding-top: 12px;
            font-weight: bold;
        }
    }
`