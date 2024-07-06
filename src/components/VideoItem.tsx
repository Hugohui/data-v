import { useRef } from "react"
import { VideoCoverStyle, VideoItemStyle } from "./VideoBoxStyle"
import VideoPlayer from "./VideoPlayer"

export interface VideoInfoI {
    url?: string,
    lineCont?: number,
    VideoLink?: string,
    showVideoCover?: boolean
}

export const VideoItem = ({ lineCont, url, showVideoCover = true}: VideoInfoI) => {

    const videoRef = useRef<any>(null)

    const onClickVideo = () => {
        videoRef.current && videoRef.current.play()
    }

    return (
        <VideoItemStyle $lineCont={lineCont} className="VideoItemStyle">
            <VideoCoverStyle>
                <span onClick={onClickVideo}></span>
            </VideoCoverStyle>
            <VideoPlayer ref={videoRef} src={url}></VideoPlayer>
        </VideoItemStyle>
    )
}