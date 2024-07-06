import { PageRightStyle, PageRightFeedPlanStyle, PageRightFeedBottomStyle } from "./style"
import { BorderBox } from "@/components/basic/BorderBox"
import BlankErrorRateLine from "./charts/BlankErrorRateLine"
import { FeedPlanInfo } from "./charts/FeedFlanInfo"
import PlanLine from "./charts/PlanLine"
import PlanFunnel from "./charts/PlanFunnel"
import { VideoList } from "./components/VideoList"

export const PageRight = () => {

    return (
       <PageRightStyle>
            <PageRightFeedPlanStyle>
                <FeedPlanInfo></FeedPlanInfo>
            </PageRightFeedPlanStyle>
            <PageRightFeedBottomStyle>
                <div className="bottomLeft">
                    <div className="funnel">
                        <PlanFunnel></PlanFunnel>
                    </div>
                    <div className="planLine">
                        <PlanLine></PlanLine>
                    </div>
                </div>
                <div className="bottomRight">
                    <div className="rightTop">
                        <VideoList></VideoList>
                    </div>
                    <div className="rightBottom">
                        <BorderBox height="368" title="下料误差率">
                            <BlankErrorRateLine></BlankErrorRateLine>
                        </BorderBox>
                    </div>
                </div>
            </PageRightFeedBottomStyle>
       </PageRightStyle>
    )
}