import { VideoBox } from '@/components/VideoBox'
import { useEffect, useState } from 'react'
import { RealTimeVideoStyle } from './RealTimeVideoStyle'
import useEvent from '@/hooks/useEventHook'

export const RealTimeVideo = () => {
    const { subscribe } = useEvent()
    const [videoList, setVideoList] = useState<any>([])

    useEffect(() => {
        subscribe('onSheepDetailSelectEmit', (data: any) => {
            if (data) {
                setVideoList(data.vidLst)
                // setVideoList([{url: 'rtsp://admin:123456@192.168.2.126:554/mpeg4'}])
                // setVideoList([{url: ''}, {url: ''}])
            }
        })
    }, [])

    return (
        <RealTimeVideoStyle className={`videoList_${videoList.length}`}>
            <VideoBox videoList={videoList} height="374"></VideoBox>
        </RealTimeVideoStyle>
    )
}