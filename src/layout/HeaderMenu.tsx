import { HeaderStyle, HeaderTitle, HeaderSubTitle } from "./HeaderStyle"
import { HeaderInfo } from "./HeaderInfo"
import { MenuList } from "./MenuList"

export const HeaderMenu = () => {
    return (
        <>
            <HeaderStyle $menu={true}>
                <HeaderInfo></HeaderInfo>
                <HeaderTitle>产投奶山羊数智化平台</HeaderTitle>
                <HeaderSubTitle>GOAT DIGITAL INTELLIGENCE PLATFORM</HeaderSubTitle>
                <MenuList></MenuList>
            </HeaderStyle>
        </>
    )
}