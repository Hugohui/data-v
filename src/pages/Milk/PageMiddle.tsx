import { PageMiddleStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"
import MilkProductLine from "./charts/MilkProductLine";
import MilkYieldLine from "./charts/MilkYieldLine";
import { MilkVideo } from "./charts/MilkVideo";


export const PageMiddle = () => {
    return (
        <PageMiddleStyle>
            <BorderBox title="昨日班次产奶趋势图" height="374" width="612">
                <MilkProductLine></MilkProductLine>
            </BorderBox>
            <MilkVideo></MilkVideo>
            <BorderBox title="月度产奶量统计" height="374" width="612">
                <MilkYieldLine></MilkYieldLine>
            </BorderBox>
        </PageMiddleStyle>
    )
}