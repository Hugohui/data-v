import { getPastureVideoList } from "@/api/common"
import { VideoBox } from "@/components/VideoBox"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"
import { useState } from "react"

export const VideoList = () => {
    const [videoList, setVideoList] = useState([])

    const getData = () => {
        getPastureVideoList({
            type: 2
        }).then((res: any) => {
            if (res.data) {
                setVideoList(res.data?.slice(0, 4))
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <VideoBox videoList={videoList}></VideoBox>
    )
}