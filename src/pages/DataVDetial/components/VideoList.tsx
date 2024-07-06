import { getPastureVideoList } from "@/api/common"
import { VideoBox } from "@/components/VideoBox"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"
import { useState } from "react"


export const VideoList = ({ CowBarnID }: any) => {
    const [videoList, setVideoList] = useState([])

    const getData = () => {
        getPastureVideoList({
            CowBarnID,
            type: 1
        }).then((res: any) => {
            if (res.data) {
                setVideoList(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <VideoBox videoList={videoList} height="700" lineCont={3}></VideoBox>
    )
}