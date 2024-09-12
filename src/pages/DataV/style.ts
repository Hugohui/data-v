import styled from "styled-components"
// import dataVPageBg from '@/assets/img/dataVPageBg.png'
import dataVPageBg from '@/assets/img/dataVPageBg.jpg'
import selectSheelOptionsBg from '@/assets/img/selectSheelOptionsBg.png';

export const PageBGStyle = styled.div`
    width: 100%;
    height: 100%;
    /* background-image: url(${dataVPageBg}); */
    background-size: 100% 100%;
    background-repeat: no-repeat;
`

export const PageContent = styled.div`
    width: 1920px;
    height: 1080px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #14182C;
    .react-transform-wrapper, .react-transform-component {
        width: 100%;
        height: 100%;
    }
`

export const PageLeftStyle = styled.div`
    position: absolute;
    top: 160px;
    left: 30px;
    width: 458px;
    height: auto;
`

export const PageCenterStyle = styled.div`
    flex: 1;
    align-items: center;
`

export const PageCenterMainStyle = styled.div`
    height: 724px;
`

export const PageCenterInfoStyle = styled.div`
    position: absolute;
    bottom: 68px;
    left: 50%;
    transform: translateX(-50%);
    width: 943px;
    height: 127px;
    display: flex;
    justify-content: center;
    gap: 29px;
`

export const PageRightStyle = styled.div`
    position: absolute;
    top: 160px;
    right: 30px;
    width: 458px;
    height: auto;

    .select {
        position: relative;
        padding-right: 25px;
        .selected {
            position: relative;
            display: inline-block;
            border: 1px solid #204357;
            cursor: pointer;
            color: #FFFFFF;
            font-size: 14px;
            padding: 0 10px;
            border-radius: 4px;
            width: 120px;
            overflow: hidden;
            height: 25px;
            line-height: 25px;
            margin-top: 15px;
            padding-right: 20px;

            &::after {
                content: "";
                position: absolute;
                right: 6px;
                top: 50%;
                transform: translateY(-50%);
                margin-top: 2px;
                display: inline-block;
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 8px solid #fff; /* 下拉三角的颜色 */
                border-bottom: none;
            }

            &.isActive {
                &::after {
                    border-left: 4px solid transparent;
                    border-right: 4px solid transparent;
                    border-top: none;
                    border-bottom: 8px solid #fff; /* 下拉三角的颜色 */
                }
            }
        }

        .selecte-options {
            position: absolute;
            top: 50px;
            right: 10px;
            z-index: 110;
            height: 212px;
            width: 171px;
            background-image: url(${selectSheelOptionsBg});
            background-repeat: no-repeat;
            background-size: 100% 100%;
            color: #1DF0BC;
            font-size: 15px;
            padding: 8px;
            text-align: center;
            overflow: auto;
            & > div {
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #38937D;
                cursor: pointer;
                &:last-child {
                    border-bottom: none;
                }
            }
        }
    }
`