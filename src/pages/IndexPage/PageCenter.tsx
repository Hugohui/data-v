import { PageCenterStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import MilkTendencyBar from "./charts/MilkTendencyBar"
// import FeedUsageLine from "./charts/FeedUsageLine"


export const PageCenter = () => {
    return (
        <PageCenterStyle>
            {/* <BorderBox title="饲料使用情况" size="large" height="294" className="FeedUsageLine">
                <FeedUsageLine></FeedUsageLine>
            </BorderBox> */}
            <BorderBox size="large" title="产奶变化趋势" height="294">
                <MilkTendencyBar></MilkTendencyBar>
            </BorderBox>
        </PageCenterStyle>
    )
}