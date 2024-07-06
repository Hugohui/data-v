import { getPastureVideoList } from '@/api/common'
import { VideoBox } from '@/components/VideoBox'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'
import { useState } from 'react'
import { MilkVideoStyle } from '../style'

export const MilkVideo = () => {
    const [videoList, setVideoList] = useState<any>([])

    const getData = () => {
        getPastureVideoList({
            type: 3
        }).then((res: any) => {
            if (res.code === 200 && res.data) {
                setVideoList(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <MilkVideoStyle>
            <VideoBox videoList={videoList} height="374"></VideoBox>
        </MilkVideoStyle>
    )
}