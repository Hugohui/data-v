import { FC } from "react"
import { HeaderMenu } from "./HeaderMenu"
import { Footer } from "./Footer"
import { LayoutStyle, PageStyle } from "../style/globalStyleSet"
import { CurrentViewStyle, MainStyle } from './BasicLayoutStyle'

export const BasicLayout: FC<{children: any}> = ({ children }) => {
    return (
        <LayoutStyle>
            <PageStyle>
                <HeaderMenu></HeaderMenu>

                <CurrentViewStyle>当前牧场：陕西宝鸡第一养殖场</CurrentViewStyle>

                <MainStyle>
                    { children }
                </MainStyle>

                <Footer></Footer>
            </PageStyle>
        </LayoutStyle>
    )
}