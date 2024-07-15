import styled from "styled-components";

export const MonthYearSwitchStyle = styled.div`
    position: absolute;
    top: 6px;
    right: 25px;
    color: #fff;
    text-align: right;
    padding-right: 30px;
    margin-top: 6px;
    /* display: flex; */
    z-index: 99;
`

export const SwitchItem = styled.div<{isactive: boolean}>`
    height: 24px;
    width: 46px;
    text-align: center;
    line-height: 24px;
    background: #214A4D;
    border-radius: 4px;
    opacity: 0.66;
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 12px;
    color: rgba(29, 240, 188, 0.6);
    margin-left: 9px;
    cursor: pointer;
    display: inline-block;

    ${props => props.isactive && `
        background: #214A4D;
        border: 1px solid #19D9AE;
        color: #69FFDC;
    `}
`