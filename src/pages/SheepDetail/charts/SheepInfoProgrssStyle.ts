import styled from "styled-components";
import sheepDetailCurrentSheepInfo from '../../../assets/img/sheepDetailCurrentSheepInfo.png'
import iconCurrentSheep from '../../../assets/img/icons/iconCurrentSheep.png'
import iconCurrentSheepMilk from '../../../assets/img/icons/iconCurrentSheepMilk.png'

export const SheepInfoProgrssStyle = styled.div`
    margin: 0 auto;
    width: 830px;
    height: 101px;
    background-image: url(${sheepDetailCurrentSheepInfo});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export const ProgrssStyle = styled.div<{progress?: Number}>`
    height: 100%;
    background: linear-gradient(90deg, #009398 0%, #00DEEE 100%);
    border-radius: 18px;
    width: 0px;
    ${
        props => props?.progress && `
            width: ${props?.progress}%;
        `
    }
`

export const FeedFlanInfoStyle = styled.div`
    color: #fff;
    display: flex;
    padding: 17px 0;
`

export const FeedPlanInfoItemStyle = styled.div`
    flex: 1;
    height: 61px;
    border-left: 1px solid #267F7E;
    padding-left: 23px;
    font-family: PingFang SC;
    display: flex;
    &:first-child {
        border: none;
    }
    .icon {
        width: 50px;
        height: 52px;
        margin-top: 4px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        &.icon-current-sheep {
            background-image: url(${iconCurrentSheep})
        }
        &.icon-current-sheep-milk {
            background-image: url(${iconCurrentSheepMilk})
        }
    }
    .main {
        flex: 1;
        padding-left: 24px;
        .label {
            height: 16px;
            font-weight: 400;
            font-size: 16px;
            color: #FDFDFD;
        }
        .value {
            margin-top: 12px;
            font-family: DIN;
            font-weight: bold;
            font-size: 32px;
            color: #1DF0BC;
            .unit {
                font-weight: bold;
                font-size: 18px;
                color: #FFFFFF;
                margin-left: 12px;
            }
        }
    }
`