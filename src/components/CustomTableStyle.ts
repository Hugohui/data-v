import styled from "styled-components";
import tableRowSelectedBg from '../assets/img/tableRowSelectedBg.png'

export const TableStyle = styled.div<{$height?: number}>`
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    font-family: PingFang SC;
    overflow-y: auto;

    -ms-overflow-style: none;  /* 对于IE和Edge */
    scrollbar-width: none;  /* 对于Firefox */
    &::-webkit-scrollbar {
        display: none; /* 对于Webkit浏览器 */
    }


    table {
        width: 100%;
    }

    tr {
        height: 50px;
        line-height: 50px;
        vertical-align: middle;

        &.canSelect {
            cursor: pointer;
        }

        &.active {
            background-image: url(${tableRowSelectedBg});
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    }

    thead {
        position: sticky;
        top: 0;
        font-weight: 500;
        font-size: 15px;
        color: #19FCDE;
        /* background-color: rgba(255, 255, 255, 0.02); */
        background-color: #1E2B45;
    }

    tr:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.02);
    }

    .empty {
        width: 100%;
        text-align: center;
    }
`