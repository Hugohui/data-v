import styled from "styled-components";

export const AmapContainerStyle = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    &::after {
        content: " ";
        display: inline-block;
        height: 120px;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(to bottom, #1B2738, transparent);
        z-index: 998;
    }

    &::before {
        content: " ";
        display: inline-block;
        height: 120px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        background-image: linear-gradient(to top, #1B2738, transparent);
        z-index: 998;
    }

    .amapContainer::after {
        content: " ";
        display: inline-block;
        height: 100%;
        width: 488px;
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(to right, #1B2738, transparent);
        z-index: 998;
    }

    .amapContainer::before {
        content: " ";
        display: inline-block;
        height: 100%;
        width: 488px;
        position: absolute;
        right: 0;
        top: 0;
        background-image: linear-gradient(to left, #1B2738, transparent);
        z-index: 998;
    }
`