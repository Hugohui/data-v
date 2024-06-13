import { FC } from "react"
import { Header } from "./Header"
import { LayoutStyle, PageStyle } from "../style/globalStyleSet"


export const BasicLayout: FC<{children: any}> = ({ children }) => {
    return (
        <LayoutStyle>
            <PageStyle>
                <Header />

                <main>
                    { children }
                </main>
            </PageStyle>
        </LayoutStyle>
    )
}