import styled from "styled-components";
import menuBgLeft from '../assets/img/menu/menuBgLeft.png'
import menuBgLeftActive from '../assets/img/menu/menuBgLeftActive.png'
import menuBgRight from '../assets/img/menu/menuBgRight.png'
import menuBgRightActive from '../assets/img/menu/menuBgRightActive.png'
import menuBgRightLarge from '../assets/img/menu/menuBgRightLarge.png'
import menuBgRightLargeActive from '../assets/img/menu/menuBgRightLargeActive.png'

export const MenuListStyle = styled.nav`
    width: 100%;
    height: 40px;
    position: absolute;
    top: 62px;
    left:0;
    ul {
        width: 50%;
        float: left;
        text-align: right;
        a {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            width: 145px;
            text-decoration: none;
            font-family: PingFang SC;
            font-weight: 400;
            font-size: 18px;
            color: #FFFFFF;
            vertical-align: top;
            text-align: center;
            background-image: url(${menuBgLeft});
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url(${menuBgLeft});
            &.active{
                background-image: url(${menuBgLeftActive});
            }
        }
        &.left {
            padding-right: 360px;
            a {
                margin-right: -10px;
            }
        }
        &.right {
            padding-left: 368px;
            text-align: left;
            a {
                width: 151px;
                margin-right: -10px;
                background-image: url(${menuBgRight});
                &.active{
                    background-image: url(${menuBgRightActive});
                }

                &:last-child {
                    width: 194px;
                    background-image: url(${menuBgRightLarge});
                    &.active{
                        background-image: url(${menuBgRightLargeActive});
                    }
                }
            }
        }
    }
`