import { FC } from "react"
import { VideoBoxStyle, VideoItemStyle } from "./VideoBoxStyle"
import { VideoItem, VideoInfoI } from "./VideoItem"


interface VideoBoxI {
    height?: string
    width?: string
    lineCont?: number
    videoList: VideoInfoI[]
}

export const VideoBox: FC<VideoBoxI> = (props) => {
    return (
        <VideoBoxStyle $height={props.height} $width={props.width} className="VideoBoxStyle">
            {
                props?.videoList?.map((item: VideoInfoI, index: any) => {
                    return <VideoItem lineCont={props.lineCont} url={item.url || item.VideoLink} key={index}></VideoItem>
                })
            }
        </VideoBoxStyle>
    )
}