
import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import Hls from 'hls.js'

const getM3u8VideoStreamUrl = (url: string) => {
    return `http://192.168.1.9:8080/api/device/getM3u8VideoStream?stream=${url}&deviceId=${url}`
}

const VideoPlayer = forwardRef(({ src, autoPlay=true }: any, ref) => {
    const videoRef = useRef<any>()
    let hlsRef = useRef<any>()
    const isFirstRef = useRef(true)
    useEffect(() => {
        if (src) {
            const streamUrl = getM3u8VideoStreamUrl(src)
            if (Hls.isSupported()) {
                hlsRef.current = new Hls()
                hlsRef.current.loadSource(streamUrl)
                hlsRef.current.attachMedia(videoRef.current)
                hlsRef.current.on(Hls.Events.FRAG_LOADED, () => {
                    if (!autoPlay) {
                        isFirstRef.current && pause()
                    }
                    isFirstRef.current = false
                })
            } else if (videoRef.current) {
                videoRef.current.src = streamUrl
                videoRef.current.addEventListener('loadedmetadata', () => {
                    videoRef.current.play()
                })
            }
        }

        return () => {
            if (hlsRef.current) {
                hlsRef.current.destroy()
            }
        }

    }, [src])

    const play = () => {
        hlsRef.current && hlsRef.current.startLoad();
        videoRef.current && videoRef.current.play()
    }

    const pause = () => {
        videoRef.current && videoRef.current.pause();
        hlsRef.current && hlsRef.current.stopLoad();
    }

    useImperativeHandle(ref, () => {
        return {
            play,
            pause
        }
    })

    return (
        <video ref={videoRef} autoPlay={autoPlay} style={{ width: '100%'}}></video>
    )
})

export default VideoPlayer