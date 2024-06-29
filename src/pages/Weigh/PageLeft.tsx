import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import { SheepListTable } from "./charts/SheepListTable"
import WeighCandlestick from "./charts/WeighCandlestick"

export const PageLeft = () => {
    return (
        <PageLeftStyle>
            <BorderBox title="羊只列表" height="428">
                <SheepListTable></SheepListTable>
            </BorderBox>
            <BorderBox title="羔羊出生体重分布图" height="428">
                <WeighCandlestick></WeighCandlestick>
            </BorderBox>
        </PageLeftStyle>
    )
}