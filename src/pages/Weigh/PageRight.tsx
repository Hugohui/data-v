import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
// import IncrementBar from "./charts/IncrementBar"
import { WeighSectionBox } from "./charts/WeighSectionBox"
import HeighScatter from "./charts/HeighScatter"

export const PageRight = () => {
    return (
        <PageRightStyle>
            <BorderBox title="羊群体重区间占比" height="428" className="GaugeBox">
                <WeighSectionBox></WeighSectionBox>
            </BorderBox>
            {/* <BorderBox title="各分群日增重" height="428">
                <IncrementBar></IncrementBar>
            </BorderBox> */}
            <BorderBox title="各月龄体高散点图" height="428">
                <HeighScatter></HeighScatter>
            </BorderBox>
        </PageRightStyle>
    )
}