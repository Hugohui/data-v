import { PageCenterStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import FeedUsageLine from "./charts/FeedUsageLine"


export const PageCenter = () => {
    return (
        <PageCenterStyle>
            <BorderBox title="饲料使用情况" size="large" height="294" className="FeedUsageLine">
                <FeedUsageLine></FeedUsageLine>
            </BorderBox>
        </PageCenterStyle>
    )
}