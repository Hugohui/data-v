import { PageMiddleStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"
import { VideoBox } from "../../components/VideoBox"
import { useState } from "react";

const testVideoList = [
    {url: ""},
    {url: ""},
    {url: ""},
    {url: ""},
]

export const PageMiddle = () => {
    const [videoList, SetVideoList] = useState(testVideoList)

    return (
        <PageMiddleStyle>
            <BorderBox title="昨日班次产奶趋势图" height="374" width="612"></BorderBox>
            <VideoBox videoList={videoList} height="374"></VideoBox>
            <BorderBox title="月度产奶量统计" height="374" width="612"></BorderBox>
        </PageMiddleStyle>
    )
}