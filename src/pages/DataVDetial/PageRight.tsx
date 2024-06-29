import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import Co2GasLine from "./charts/Co2GasLine"
import LUXLine from "./charts/LUXLine"
import WaterPHLine from "./charts/WaterPHLine"


export const PageRight = () => {
    return (
       <PageRightStyle>
            <BorderBox title="二氧化碳">
                <Co2GasLine></Co2GasLine>
            </BorderBox>
            <BorderBox title="光照">
                <LUXLine></LUXLine>
            </BorderBox>
            <BorderBox title="水质">
                <WaterPHLine></WaterPHLine>
            </BorderBox>
       </PageRightStyle>
    )
}