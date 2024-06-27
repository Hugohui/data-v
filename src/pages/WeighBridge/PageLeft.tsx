import { PageLeftStyle } from "./style";
import { VideoBox } from "../../components/VideoBox"
import { useState } from "react";

const testVideoList = [
    {url: ""},
    {url: ""},
    {url: ""},
    {url: ""},
]

export const PageLeft = () => {
    const [videoList, SetVideoList] = useState(testVideoList)

    return (
        <PageLeftStyle>
            <VideoBox videoList={videoList}></VideoBox>
        </PageLeftStyle>
    )
}