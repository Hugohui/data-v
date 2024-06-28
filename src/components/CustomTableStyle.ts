import styled from "styled-components";

export const TableStyle = styled.div<{$height?: number}>`
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    font-family: PingFang SC;
    overflow-y: auto;

    table {
        width: 100%;
    }

    tr {
        height: 50px;
        line-height: 50px;
        vertical-align: middle;
    }

    thead {
        /* position: sticky;
        top: 0; */
        font-weight: 500;
        font-size: 15px;
        color: #19FCDE;
        background-color: rgba(255, 255, 255, 0.05);
    }

    tr:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.05);
    }
`