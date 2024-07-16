import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { blankErrorRateLineOptions } from "./BlankErrorRateLineOptions"
import { FC, useState } from 'react'
import { getFeedingErroRatelist } from '@/api/Feeding'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'


interface OptionsI {
    // data: KeepRatioInfoI[]
}

const BlankErrorRateLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState([])

    const getData = () => {
        getFeedingErroRatelist ().then((res: any) => {
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
                    option={blankErrorRateLineOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default BlankErrorRateLine