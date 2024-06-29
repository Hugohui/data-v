import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import MilkYieldLine from "./charts/MilkYieldLine"
import ProductRadar from "./charts/ProductRadar"


export const PageRight = () => {
    return (
       <PageRightStyle>
            <BorderBox title="环境监测"></BorderBox>
            <BorderBox title="产奶量">
                <MilkYieldLine></MilkYieldLine>
            </BorderBox>
            <BorderBox title="主要生产性能指标">
                <ProductRadar></ProductRadar>
            </BorderBox>
       </PageRightStyle>
    )
}