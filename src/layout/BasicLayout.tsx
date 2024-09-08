import { FC, Suspense, useState } from "react"
import { HeaderMenu } from "./HeaderMenu"
import { Footer } from "./Footer"
import { LayoutStyle, PageStyle } from "../style/globalStyleSet"
import { CurrentViewStyle, GoHomeStyle, MainStyle, GoBackStyle } from './BasicLayoutStyle'
import { useLocation, useNavigate } from "react-router-dom"
import { getFarmInfo, getSheepRoomInfo } from "@/utils/session"

export const BasicLayout: FC<{children: any}> = ({ children }) => {
    const navigator = useNavigate()
    const location = useLocation()
    
    const farmInfo = getFarmInfo()
    const sheepRoomInfo = getSheepRoomInfo()

    return (
        <LayoutStyle>
            <PageStyle $isDataV={location.pathname === '/dataV'}>
                <HeaderMenu></HeaderMenu>

                <CurrentViewStyle $isDataV={location.pathname === '/dataV'}>
                    <span></span>
                    {
                        location.pathname === '/sheepDetail' ? <>当前羊舍：{ sheepRoomInfo.name }</> : <>当前牧场：{ farmInfo.PastureName }</>
                    }
                    
                </CurrentViewStyle>

                {
                    location.pathname === '/sheepDetail' ?
                    <GoBackStyle>
                        <div onClick={() => navigator(-1)}></div>
                    </GoBackStyle> : ''
                }

                <GoHomeStyle>
                    <div onClick={() => navigator('/')}></div>
                </GoHomeStyle>

                <MainStyle>
                    <Suspense fallback={<span>loading....</span>}>
                        { children }
                    </Suspense>
                </MainStyle>

                <Footer></Footer>
            </PageStyle>
        </LayoutStyle>
    )
}