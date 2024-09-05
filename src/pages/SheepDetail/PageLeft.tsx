import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
// import { SheepListTable } from "./charts/SheepListTable"
import WeighCandlestick from "./charts/WeighCandlestick"

export const PageLeft = () => {
    return (
        <PageLeftStyle>
            <BorderBox title="羊只卡片" height="428">
                {/* <SheepListTable></SheepListTable> */}
            </BorderBox>
            <BorderBox title="羊只谱系" height="428">
                <WeighCandlestick></WeighCandlestick>
            </BorderBox>
        </PageLeftStyle>
    )
}