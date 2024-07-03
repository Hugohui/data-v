import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { barOptions } from "./TotalYieldBarOptions"
import { FC, useState } from 'react'
import { getDailyTotalMilkVolumStaticEachPast } from '@/api/Milk'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'

interface OptionsI {
    // data: number[]
}

const TotalYieldBar: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState<any>([])

    const getData = () => {
        getDailyTotalMilkVolumStaticEachPast().then((res: any) => {
            if (res.data) {
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

export default TotalYieldBar