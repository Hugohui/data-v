import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import ProcessMontBodyAgeLine from "./charts/ProcessMontBodyAgeLine"
import { ProcessRecords } from "./charts/ProcessRecords"

export const PageRight = () => {
    return (
        <PageRightStyle>
            <BorderBox title="过程记录" height="505" className="GaugeBox">
                <ProcessRecords></ProcessRecords>
            </BorderBox>
            <BorderBox title="月领体态过程" height="350">
                <ProcessMontBodyAgeLine></ProcessMontBodyAgeLine>
            </BorderBox>
        </PageRightStyle>
    )
}