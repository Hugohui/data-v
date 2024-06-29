import { PageRightStyle, PageRightFeedPlanStyle, PageRightFeedBottomStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import { VideoBox } from "../../components/VideoBox"
import { useState } from "react"
import BlankErrorRateLine from "./charts/BlankErrorRateLine"

const testVideoList = [
    {url: ""},
    {url: ""},
    {url: ""},
    {url: ""},
]


export const PageRight = () => {

    const [videoList, SetVideoList] = useState(testVideoList)

    return (
       <PageRightStyle>
            <PageRightFeedPlanStyle></PageRightFeedPlanStyle>
            <PageRightFeedBottomStyle>
                <div className="bottomLeft"></div>
                <div className="bottomRight">
                    <div className="rightTop">
                        <VideoBox videoList={videoList}></VideoBox>
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