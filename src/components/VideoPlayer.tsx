
import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import Hls from 'hls.js'

const VideoPlayer = forwardRef(({ src, autoPlay=true }: any, ref) => {
    const videoRef = useRef<any>()
    let hlsRef = useRef<any>()
    const isFirstRef = useRef(true)
    useEffect(() => {
        if (src) {
            if (Hls.isSupported()) {
                hlsRef.current = new Hls()
                hlsRef.current.loadSource(src)
                hlsRef.current.attachMedia(videoRef.current)
                hlsRef.current.on(Hls.Events.FRAG_LOADED, () => {
                    if (!autoPlay) {
                        isFirstRef.current && pause()
                    }
                    isFirstRef.current = false
                })
            } else if (videoRef.current) {
                videoRef.current.src = src
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