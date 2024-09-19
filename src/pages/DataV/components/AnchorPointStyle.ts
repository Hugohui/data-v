import styled from "styled-components";
import point1 from '../img/opint-1.png'
import point2 from '../img/opint-2.png'
import point3 from '../img/opint-3.png'
import point4 from '../img/opint-4.png'
import point5 from '../img/opint-5.png'
import point6 from '../img/opint-6.png'
import point7 from '../img/opint-7.png'
import point8 from '../img/opint-8.png'
import point9 from '../img/opint-9.png'
import point10 from '../img/opint-10.png'
import point11 from '../img/opint-11.png'
import point12 from '../img/opint-12.png'
import point13 from '../img/opint-13.png'
import point14 from '../img/opint-14.png'
import point15 from '../img/opint-15.png'
import point16 from '../img/opint-16.png'
import point17 from '../img/opint-17.png'
import point18 from '../img/opint-18.png'
import point19 from '../img/opint-19.png'
import point20 from '../img/opint-20.png'
import point21 from '../img/opint-21.png'
import point22 from '../img/opint-22.png'
import point23 from '../img/opint-23.png'
import point24 from '../img/opint-24.png'
import point25 from '../img/opint-25.png'
import point26 from '../img/opint-26.png'
import point27 from '../img/opint-27.png'
import point28 from '../img/opint-28.png'

import point1Error from '../img/error/opint-1-error.png'
import point2Error from '../img/error/opint-2-error.png'
import point3Error from '../img/error/opint-3-error.png'
import point4Error from '../img/error/opint-4-error.png'
import point5Error from '../img/error/opint-5-error.png'
import point6Error from '../img/error/opint-6-error.png'
import point7Error from '../img/error/opint-7-error.png'
import point8Error from '../img/error/opint-8-error.png'
import point9Error from '../img/error/opint-9-error.png'
import point10Error from '../img/error/opint-10-error.png'
import point11Error from '../img/error/opint-11-error.png'
import point12Error from '../img/error/opint-12-error.png'
import point13Error from '../img/error/opint-13-error.png'
import point14Error from '../img/error/opint-14-error.png'
import point15Error from '../img/error/opint-15-error.png'
import point16Error from '../img/error/opint-16-error.png'
import point17Error from '../img/error/opint-17-error.png'
import point18Error from '../img/error/opint-18-error.png'
import point19Error from '../img/error/opint-19-error.png'
import point20Error from '../img/error/opint-20-error.png'
import point21Error from '../img/error/opint-21-error.png'
import point22Error from '../img/error/opint-22-error.png'
import point23Error from '../img/error/opint-23-error.png'
import point24Error from '../img/error/opint-24-error.png'
import point25Error from '../img/error/opint-25-error.png'
import point26Error from '../img/error/opint-26-error.png'
import point27Error from '../img/error/opint-27-error.png'
import point28Error from '../img/error/opint-28-error.png'

import point1Warning from '../img/warning/opint-1-warning.png'
import point2Warning from '../img/warning/opint-2-warning.png'
import point3Warning from '../img/warning/opint-3-warning.png'
import point4Warning from '../img/warning/opint-4-warning.png'
import point5Warning from '../img/warning/opint-5-warning.png'
import point6Warning from '../img/warning/opint-6-warning.png'
import point7Warning from '../img/warning/opint-7-warning.png'
import point8Warning from '../img/warning/opint-8-warning.png'
import point9Warning from '../img/warning/opint-9-warning.png'
import point10Warning from '../img/warning/opint-10-warning.png'
import point11Warning from '../img/warning/opint-11-warning.png'
import point12Warning from '../img/warning/opint-12-warning.png'
import point13Warning from '../img/warning/opint-13-warning.png'
import point14Warning from '../img/warning/opint-14-warning.png'
import point15Warning from '../img/warning/opint-15-warning.png'
import point16Warning from '../img/warning/opint-16-warning.png'
import point17Warning from '../img/warning/opint-17-warning.png'
import point18Warning from '../img/warning/opint-18-warning.png'
import point19Warning from '../img/warning/opint-19-warning.png'
import point20Warning from '../img/warning/opint-20-warning.png'
import point21Warning from '../img/warning/opint-21-warning.png'
import point22Warning from '../img/warning/opint-22-warning.png'
import point23Warning from '../img/warning/opint-23-warning.png'
import point24Warning from '../img/warning/opint-24-warning.png'
import point25Warning from '../img/warning/opint-25-warning.png'
import point26Warning from '../img/warning/opint-26-warning.png'
import point27Warning from '../img/warning/opint-27-warning.png'
import point28Warning from '../img/warning/opint-28-warning.png'

export const AnchorPointStyle = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 490px;
    top: 150px;
    z-index: 99;

    & > div {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: absolute;
        cursor: pointer;

        .videoHover {
            position: absolute;
            left: 60px;
            top: 10px;
            width: 400px;
            height: 300px;
            background-color: #122F44;
            z-index: 100;
            border-radius: 18px;
            padding: 10px;
            text-align: center;
            opacity: 0.9;
            video {
                background-color: #000;
                margin-bottom: 30px;
            }
            span {
                padding: 6px 12px;
                background-color: #23827B;
                border-radius: 3px;
                cursor: pointer;
                color: #fff;
                font-weight: bolder;
            }
        }

        &:nth-child(1) {
            left: 160px;
            top: 25px;
            width: 86px;
            height: 163px;
            background-image: url(${point1});
            &.error {
                background-image: url(${point1Error});
            }
            &.warning {
                background-image: url(${point1Warning});
            }
        }
        &:nth-child(2) {
            left: 321px;
            top: 25px;
            width: 86px;
            height: 122px;
            background-image: url(${point2});
            &.error {
                background-image: url(${point2Error});
            }
            &.warning {
                background-image: url(${point2Warning});
            }
        }
        &:nth-child(3) {
            left: 9px;
            top: 111px;
            width: 87px;
            height: 163px;
            background-image: url(${point3});
            &.error {
                background-image: url(${point3Error});
            }
            &.warning {
                background-image: url(${point3Warning});
            }
        }
        &:nth-child(4) {
            left: 220px;
            top: 106px;
            width: 108px;
            height: 102px;
            background-image: url(${point4});
            &.error {
                background-image: url(${point4Error});
            }
            &.warning {
                background-image: url(${point4Warning});
            }
        }
        &:nth-child(5) {
            left: 510px;
            top: 25px;
            width: 110px;
            height: 101px;
            background-image: url(${point5});
            &.error {
                background-image: url(${point5Error});
            }
            &.warning {
                background-image: url(${point5Warning});
            }
        }
        &:nth-child(6) {
            left: 72px;
            top: 195px;
            width: 111px;
            height: 102px;
            background-image: url(${point6});
            &.error {
                background-image: url(${point6Error});
            }
            &.warning {
                background-image: url(${point6Warning});
            }
        }
        &:nth-child(7) {
            left: 376px;
            top: 108px;
            width: 111px;
            height: 101px;
            background-image: url(${point7});
            &.error {
                background-image: url(${point7Error});
            }
            &.warning {
                background-image: url(${point7Warning});
            }
        }
        &:nth-child(8) {
            left: 658px;
            top: 24px;
            width: 110px;
            height: 101px;
            background-image: url(${point8});
            &.error {
                background-image: url(${point8Error});
            }
            &.warning {
                background-image: url(${point8Warning});
            }
        }
        &:nth-child(9) {
            left: 6px;
            top: 326px;
            width: 108px;
            height: 72px;
            background-image: url(${point9});
            &.error {
                background-image: url(${point9Error});
            }
            &.warning {
                background-image: url(${point9Warning});
            }
        }
        &:nth-child(10) {
            left: 95px;
            top: 287px;
            width: 106px;
            height: 101px;
            background-image: url(${point10});
            &.error {
                background-image: url(${point10Error});
            }
            &.warning {
                background-image: url(${point10Warning});
            }
        }
        &:nth-child(11) {
            left: 258px;
            top: 204px;
            width: 111px;
            height: 102px;
            background-image: url(${point11});
            &.error {
                background-image: url(${point11Error});
            }
            &.warning {
                background-image: url(${point11Warning});
            }
        }
        &:nth-child(12) {
            left: 539px;
            top: 100px;
            width: 108px;
            height: 102px;
            background-image: url(${point12});
            &.error {
                background-image: url(${point12Error});
            }
            &.warning {
                background-image: url(${point12Warning});
            }
        }
        &:nth-child(13) {
            left: 204px;
            top: 311px;
            width: 86px;
            height: 101px;
            background-image: url(${point13});
            &.error {
                background-image: url(${point13Error});
            }
            &.warning {
                background-image: url(${point13Warning});
            }
        }
        &:nth-child(14) {
            left: 447px;
            top: 206px;
            width: 111px;
            height: 102px;
            background-image: url(${point14});
            &.error {
                background-image: url(${point14Error});
            }
            &.warning {
                background-image: url(${point14Warning});
            }
        }
        &:nth-child(15) {
            left: 723px;
            top: 113px;
            width: 110px;
            height: 101px;
            background-image: url(${point15});
            &.error {
                background-image: url(${point15Error});
            }
            &.warning {
                background-image: url(${point15Warning});
            }
        }
        &:nth-child(16) {
            left: 97px;
            top: 466px;
            width: 86px;
            height: 101px;
            background-image: url(${point16});
            &.error {
                background-image: url(${point16Error});
            }
            &.warning {
                background-image: url(${point16Warning});
            }
        }
        &:nth-child(17) {
            left: 172px;
            top: 425px;
            width: 88px;
            height: 124px;
            background-image: url(${point17});
            &.error {
                background-image: url(${point17Error});
            }
            &.warning {
                background-image: url(${point17Warning});
            }
        }
        &:nth-child(18) {
            left: 278px;
            top: 496px;
            width: 98px;
            height: 102px;
            background-image: url(${point18});
            &.error {
                background-image: url(${point18Error});
            }
            &.warning {
                background-image: url(${point18Warning});
            }
        }
        &:nth-child(19) {
            left: 151px;
            top: 558px;
            width: 86px;
            height: 101px;
            background-image: url(${point19});
            &.error {
                background-image: url(${point19Error});
            }
            &.warning {
                background-image: url(${point19Warning});
            }
        }
        &:nth-child(20) {
            left: 238px;
            top: 380px;
            width: 82px;
            height: 98px;
            background-image: url(${point20});
            &.error {
                background-image: url(${point10Error});
            }
            &.warning {
                background-image: url(${point10Warning});
            }
        }
        &:nth-child(21) {
            left: 300px;
            top: 336px;
            width: 108px;
            height: 102px;
            background-image: url(${point21});
            &.error {
                background-image: url(${point21Error});
            }
            &.warning {
                background-image: url(${point21Warning});
            }
        }
        &:nth-child(22) {
            left: 419px;
            top: 384px;
            width: 126px;
            height: 102px;
            background-image: url(${point22});
            &.error {
                background-image: url(${point22Error});
            }
            &.warning {
                background-image: url(${point22Warning});
            }
        }
        &:nth-child(23) {
            left: 576px;
            top: 260px;
            width: 86px;
            height: 102px;
            background-image: url(${point23});
            &.error {
                background-image: url(${point23Error});
            }
            &.warning {
                background-image: url(${point23Warning});
            }
        }
        &:nth-child(24) {
            left: 660px;
            top: 219px;
            width: 86px;
            height: 102px;
            background-image: url(${point24});
            &.error {
                background-image: url(${point24Error});
            }
            &.warning {
                background-image: url(${point24Warning});
            }
        }
        &:nth-child(25) {
            left: 758px;
            top: 167px;
            width: 86px;
            height: 83px;
            background-image: url(${point25});
            &.error {
                background-image: url(${point25Error});
            }
            &.warning {
                background-image: url(${point25Warning});
            }
        }
        &:nth-child(26) {
            left: 808px;
            top: 63px;
            width: 86px;
            height: 163px;
            background-image: url(${point26});
            &.error {
                background-image: url(${point26Error});
            }
            &.warning {
                background-image: url(${point26Warning});
            }
        }
        &:nth-child(27) {
            left: 884px;
            top: 114px;
            width: 77px;
            height: 156px;
            background-image: url(${point27});
            &.error {
                background-image: url(${point27Error});
            }
            &.warning {
                background-image: url(${point27Warning});
            }
        }
        &:nth-child(28) {
            left: 788px;
            top: 301px;
            width: 86px;
            height: 102px;
            background-image: url(${point28});
            &.error {
                background-image: url(${point28Error});
            }
            &.warning {
                background-image: url(${point28Warning});
            }
        }

    }
`