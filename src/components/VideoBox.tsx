import { FC } from "react"
import { VideoBoxStyle, VideoItemStyle } from "./VideoBoxStyle"
import VideoPlayer from '@/components/VideoPlayer'


interface VideoBoxI {
    height?: string
    width?: string
    lineCont?: number
    videoList: VideoInfoI[]
}

interface VideoInfoI {
    url?: string,
    lineCont?: number,
    VideoLink?: string 
}

const VideoItem: FC<VideoInfoI> = (item) => {
    return (
        <VideoItemStyle $lineCont={item.lineCont} className="VideoItemStyle">
            {/* <video src={item.url}></video> */}
            <VideoPlayer src={item.url}></VideoPlayer>
        </VideoItemStyle>
    )
}

export const VideoBox: FC<VideoBoxI> = (props) => {
    return (
        <VideoBoxStyle $height={props.height} $width={props.width} className="VideoBoxStyle">
            {
                props.videoList.map((item: VideoInfoI) => {
                    return <VideoItem lineCont={props.lineCont} url={item.url || item.VideoLink}></VideoItem>
                })
            }
        </VideoBoxStyle>
    )
}