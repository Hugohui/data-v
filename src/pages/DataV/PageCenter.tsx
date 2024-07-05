import { OverviewInfo } from "./charts/OverviewInfo"
import { AnchorPoint } from "./components/AnchorPoint"
import { PageCenterStyle, PageCenterInfoStyle, PageCenterMainStyle } from "./style"

export const PageCenter = () => {
    return (
        <PageCenterStyle>
            
            <PageCenterInfoStyle>
                <OverviewInfo></OverviewInfo>
            </PageCenterInfoStyle>
        </PageCenterStyle>
    )
}