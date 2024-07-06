
import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import Hls from 'hls.js'

const VideoPlayer = forwardRef(({ src }: any, ref) => {
    const videoRef = useRef<any>()

    useEffect(() => {
        let hls: any;
        if (src) {
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
        }


        return () => {
            if (hls) {
                hls.destroy()
            }
        }

    }, [src])

    const play = () => {
        videoRef.current && videoRef.current.play()
    }

    const pause = () => {
        videoRef.current && videoRef.current.pause()
    }

    useImperativeHandle(ref, () => {
        return {
            play,
            pause
        }
    })

    return (
        <video ref={videoRef} autoPlay={false} style={{ width: '100%'}}></video>
    )
})

export default VideoPlayer