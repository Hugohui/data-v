import { HeaderStyle, HeaderTitle, HeaderSubTitle } from "./HeaderStyle"
import { HeaderInfo } from "./HeaderInfo"
import { MenuList } from "./MenuList"

export const HeaderMenu = () => {
    return (
        <>
            <HeaderStyle $menu={true}>
                <HeaderInfo></HeaderInfo>
                <HeaderTitle></HeaderTitle>
                <HeaderSubTitle>GOAT DIGITAL INTELLIGENCE PLATFORM</HeaderSubTitle>
                <MenuList></MenuList>
            </HeaderStyle>
        </>
    )
}