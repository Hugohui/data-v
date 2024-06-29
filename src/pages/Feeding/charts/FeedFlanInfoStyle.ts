import styled from "styled-components";
import iconPlanFeed from '../../../assets/img/icons/iconPlanFeed.png'
import iconRealFeed from '../../../assets/img/icons/iconRealFeed.png'
import iconRealSpread from '../../../assets/img/icons/iconRealSpread.png'

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
        &.icon-plan-feed {
            background-image: url(${iconPlanFeed})
        }
        &.icon-real-feed {
            background-image: url(${iconRealFeed})
        }
        &.icon-real-spread {
            background-image: url(${iconRealSpread})
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