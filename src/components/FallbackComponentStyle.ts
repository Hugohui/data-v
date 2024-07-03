import styled from "styled-components";

export const FallbackComponentStyle = styled.div`
    height: 100%;
    vertical-align: center;
    text-align: center;
    color: #fdfdfd;
    font-size: 14px;
    overflow: hidden;
    .message {
        margin-top: 20%;
    }

    .retry {
        width: 100px;
        height: 30px;
        line-height: 30px;
        margin: 10px auto;
        cursor: pointer;
    }
`