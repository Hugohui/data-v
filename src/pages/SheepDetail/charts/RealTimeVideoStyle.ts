import styled from "styled-components";

export const RealTimeVideoStyle = styled.div`
    .VideoBoxStyle {
        background:none;
        justify-content: space-around;
        .VideoItemStyle {
            height: 100%;
        }
    }

    &.videoList_1 {
        height: 100%;
        .VideoBoxStyle {
            height: 100%;
            background: none;
            justify-content: space-around;
            .VideoItemStyle {
                height: 100%;
                /* width: 100%; */
                width: 328px;
            }
        }
    }

    &.videoList_2 {
        height: 100%;
        .VideoBoxStyle {
            height: 100%;
            background: none;
            justify-content: space-around;
            .VideoItemStyle {
                height: 100%;
            }
        }
    }
`