
import { useRef, useEffect } from 'react'
import Hls from 'hls.js'

const VideoPlayer = ({ src }: any) => {
    const videoRef = useRef<any>()

    useEffect(() => {

        let hls: any;
        if (Hls.isSupported()) {
            hls = new Hls()
            hls.loadSource(src)
            hls.attachMedia(videoRef.current)
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                videoRef.current.play()
            })
        } else if (videoRef.current) {
            videoRef.current.src = src
            videoRef.current.addEventListener('loadedmetadata', () => {
                videoRef.current.play()
            })
        }


        return () => {
            if (hls) {
                hls.destroy()
            }
        }

    }, [src])

    return (
        <video ref={videoRef} style={{ width: '100%'}}></video>
    )
}

export default VideoPlayer