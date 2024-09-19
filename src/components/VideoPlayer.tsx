
import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import Hls from 'hls.js'
import { getM3u8VideoStream } from '@/api/common'

const getM3u8VideoStreamUrl = async (url: string) => {
    let res: any = ''
    try {
        res = url.endsWith('.mp4') ? url : await getM3u8VideoStream(url)
    } catch (error: any) {
        console.log("======getM3u8VideoStream error====", error)
    }
    return res
}

const VideoPlayer = forwardRef(({ src, autoPlay=true }: any, ref) => {
    const videoRef = useRef<any>()
    let hlsRef = useRef<any>()
    const isFirstRef = useRef(true)

    const playVideo = async () => {
        if (src) {
            const streamUrl = await getM3u8VideoStreamUrl(src)
            if (!streamUrl) return;
            if (Hls.isSupported() && !src.endsWith('.mp4')) {
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
                videoRef.current.muted = true
                videoRef?.current?.addEventListener('loadedmetadata', () => {
                    videoRef?.current?.play()
                })
            }
        }
    }
    useEffect(() => {
        playVideo()

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