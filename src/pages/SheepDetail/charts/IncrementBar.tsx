import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { barOptions } from "./IncrementBarOptions"
import { FC, useState } from 'react'
import { getDailyGainDiffGroupDiffPastures } from '@/api/Weigh'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'

interface OptionsI {
    // data: number[]
}

const IncrementBar: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState<any>()

    const getData = () => {
        getDailyGainDiffGroupDiffPastures().then((res: any) => {
            if (res.code === 200 && res.data) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={barOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default IncrementBar