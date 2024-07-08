import { PageLeftStyle } from "./style";
import { VideoBox } from "../../components/VideoBox"
import { useEffect, useState } from "react";
import { getPastureVideoList } from "@/api/common";
import { useIntervalRequest } from "@/hooks/useIntervalRequest";

const testVideoList = [
    {url: ""},
    {url: ""},
    {url: ""},
    {url: ""},
]

export const PageLeft = () => {
    const [videoList, setVideoList] = useState(testVideoList)

    const getData = () => {
        getPastureVideoList({}).then((res: any) => {
            if (res.data) {
                setVideoList(res.data?.slice(0, 4))
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    // useIntervalRequest(getData)

    return (
        <PageLeftStyle>
            <VideoBox videoList={videoList}></VideoBox>
        </PageLeftStyle>
    )
}