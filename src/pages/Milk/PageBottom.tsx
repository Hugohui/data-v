import { PageBottomStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"
import TotalYieldBar from "./charts/TotalYieldBar";
import SiggleYeildBar from "./charts/SiggleYeildBar";

export const PageBottom = () => {
    return (
        <PageBottomStyle>
            <BorderBox title="日总产奶量统计" height="378" size="large">
                <TotalYieldBar></TotalYieldBar>
            </BorderBox>
            <BorderBox title="日均单产量统计" height="378" size="large">
                <SiggleYeildBar></SiggleYeildBar>
            </BorderBox>
        </PageBottomStyle>
    )
}