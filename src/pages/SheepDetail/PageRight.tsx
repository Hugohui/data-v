import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import IncrementBar from "./charts/IncrementBar"
import { WeighSectionBox } from "./charts/WeighSectionBox"

export const PageRight = () => {
    return (
        <PageRightStyle>
            <BorderBox title="过程记录" height="428" className="GaugeBox">
                <WeighSectionBox></WeighSectionBox>
            </BorderBox>
            <BorderBox title="月领体态过程" height="428">
                <IncrementBar></IncrementBar>
            </BorderBox>
        </PageRightStyle>
    )
}