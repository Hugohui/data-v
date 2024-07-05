import { HeaderStyle, HeaderTitle, HeaderSubTitle } from "./HeaderStyle"
import { HeaderInfo } from "./HeaderInfo"
import { MenuList } from "./MenuList"
import { useLocation } from "react-router-dom"

export const HeaderMenu = () => {
    const location = useLocation()

    return (
        <>
            <HeaderStyle $menu={true}  $isDataV={location.pathname === '/dataV'}>
                <HeaderInfo></HeaderInfo>
                <HeaderTitle></HeaderTitle>
                <HeaderSubTitle>GOAT DIGITAL INTELLIGENCE PLATFORM</HeaderSubTitle>
                <MenuList></MenuList>
            </HeaderStyle>
        </>
    )
}