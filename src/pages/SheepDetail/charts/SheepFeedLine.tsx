import { FC, useState, useEffect } from 'react'
import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { sheepFeedLineOptions } from "./SheepFeedLineOptions"
import { getFeedingCurve } from '@/api/SheepDetail'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'
import useEvent from '@/hooks/useEventHook'


interface OptionsI {
    // data: KeepRatioInfoI[]
}

const SheepFeedLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const { subscribe } = useEvent()
    const [info, setInfo] = useState<any>({})
    const [data, setData] = useState<any>({})

    const getData = () => {
        getFeedingCurve({
            CowGuid: info.CowGuid,
        }).then((res: any) => {
            if (res.code === 200 && res.data) {
                setData(res.data)
            }
        })
    }

    useEffect(() => {
        subscribe('onSheepDetailSelectEmit', (data: any) => {
            if (data) {
                setInfo(data)
            }
        })
    }, [])

    useEffect(() => {
        getData();
    }, [info.CowGuid])

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={sheepFeedLineOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default SheepFeedLine