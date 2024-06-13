import { FC } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { LayoutStyle, PageStyle } from "../style/globalStyleSet"


export const BasicLayout: FC<{children: any}> = ({ children }) => {
    return (
        <LayoutStyle>
            <PageStyle>
                <Header></Header>

                <main>
                    { children }
                </main>

                <Footer></Footer>
            </PageStyle>
        </LayoutStyle>
    )
}