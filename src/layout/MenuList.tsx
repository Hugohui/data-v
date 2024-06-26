import { NavLink } from "react-router-dom";
import { MenuListStyle } from "./MenuListStyle"

export const MenuList = () => {

    return (
        <MenuListStyle>
            <ul className="left">
                <NavLink to="/animalSituation">养殖概况</NavLink>
                <NavLink to="/feeding" >饲喂概况</NavLink>
                <NavLink to="/health">健康监测</NavLink>
                <NavLink to="/weigh">自动称重</NavLink>
            </ul>
            <ul className="right">
                <NavLink to="/milk">奶厅监测</NavLink>
                <NavLink to="/weighBridge">地磅监测</NavLink>
                <NavLink to="/dataV">数据可视化</NavLink>
            </ul>
        </MenuListStyle>
    )
}