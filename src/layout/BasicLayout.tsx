import { FC } from "react"
import { HeaderMenu } from "./HeaderMenu"
import { Footer } from "./Footer"
import { LayoutStyle, PageStyle } from "../style/globalStyleSet"
import { CurrentViewStyle, GoHomeStyle, MainStyle, GoBackStyle } from './BasicLayoutStyle'
import { useLocation, useNavigate } from "react-router-dom"

export const BasicLayout: FC<{children: any}> = ({ children }) => {
    const navigator = useNavigate()
    const location = useLocation()

    return (
        <LayoutStyle>
            <PageStyle $isDataV={location.pathname === '/dataV'}>
                <HeaderMenu></HeaderMenu>

                <CurrentViewStyle>当前牧场：陕西宝鸡第一养殖场</CurrentViewStyle>

                {
                    location.pathname === '/dataVDetail' ?
                    <GoBackStyle>
                        <div onClick={() => navigator(-1)}></div>
                    </GoBackStyle> : ''
                }

                

                <GoHomeStyle>
                    <div onClick={() => navigator('/')}></div>
                </GoHomeStyle>

                <MainStyle>
                    { children }
                </MainStyle>

                <Footer></Footer>
            </PageStyle>
        </LayoutStyle>
    )
}