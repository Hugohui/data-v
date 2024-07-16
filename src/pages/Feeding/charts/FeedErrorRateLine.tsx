import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { feedErrorRateLineOptions } from "./FeedErrorRateLineOptions"
import { FC, useState } from 'react'
import { getFeedingErroRatelist } from '@/api/Feeding'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'

interface OptionsI {
    // data: KeepRatioInfoI[]
}

const FeedErrorRateLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState([])

    const getData = () => {
        getFeedingErroRatelist().then((res: any) => {
            if (res?.code === 200) {
                setData(res?.data)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={feedErrorRateLineOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default FeedErrorRateLine