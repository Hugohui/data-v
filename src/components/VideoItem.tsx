import { useRef, useState } from "react"
import { VideoItemStyle } from "./VideoBoxStyle"
import VideoPlayer from "./VideoPlayer"

export interface VideoInfoI {
    url?: string,
    lineCont?: number,
    VideoLink?: string,
    showVideoCover?: boolean
}

export const VideoItem = ({ lineCont, url, showVideoCover = true}: VideoInfoI) => {

    const videoRef = useRef<any>(null)
    const [isPlay, setIsPlay] = useState(false)

    const onStartVideo = (e: any) => {
        videoRef.current && videoRef.current.play()
        setIsPlay(true)
        e.stopPropagation();
    }

    const onPauseVideo = () => {
        videoRef.current && videoRef.current.pause()
        setIsPlay(false)
    }

    return (
        <VideoItemStyle $lineCont={lineCont} className="VideoItemStyle">
            <div className="VideoCover" onClick={onPauseVideo}>
                {!isPlay ? <span  onClick={onStartVideo}></span> : ''}
            </div>
            <VideoPlayer ref={videoRef} src={url}></VideoPlayer>
        </VideoItemStyle>
    )
}