import { PageTopStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"
import DiseaseRatio from "./charts/DiseaseRatio";
import PropagateBar from "./charts/PropagateBar";

export const PageTop = () => {
    return (
        <PageTopStyle>
            <BorderBox title="近一年主要疾病类型" height="410" width="616">
                <DiseaseRatio></DiseaseRatio>
            </BorderBox>
            <BorderBox title="繁殖事件执行情况汇总" height="410" width="1237" size="largest">
                <PropagateBar></PropagateBar>
            </BorderBox>
        </PageTopStyle>
    )
}