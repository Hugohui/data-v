import styled from "styled-components";

export const BreedingRateBoxStyle = styled.div`
    .title {
        font-size: 16px;
        font-weight: bolder;
        color: #fff;
        padding: 12px;
        position: relative;
        &::after {
            content: " ";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 16px;
            border-radius: 2px;
            background-color: #18DBAF;
        }
    }
    .rateWrap {
        height: 120px;
    }
`