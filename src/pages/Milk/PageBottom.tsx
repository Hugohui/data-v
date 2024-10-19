import { PageBottomStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"
import TotalYieldBar from "./charts/TotalYieldBar";
// import SiggleYeildBar from "./charts/SiggleYeildBar";
import YeildAnalysis from "./charts/YeildAnalysis";

export const PageBottom = () => {
    return (
        <PageBottomStyle>
            <BorderBox title="日总产奶量统计" height="378" size="large">
                <TotalYieldBar></TotalYieldBar>
            </BorderBox>
            {/* <BorderBox title="日均单产量统计" height="378" size="large">
                <SiggleYeildBar></SiggleYeildBar>
            </BorderBox> */}
            <BorderBox title="羊只产奶数据分析与统计" height="378" size="large">
                <YeildAnalysis></YeildAnalysis>
            </BorderBox>
        </PageBottomStyle>
    )
}