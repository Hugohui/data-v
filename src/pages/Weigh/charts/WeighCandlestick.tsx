import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { candlestickOptions } from "./WeighCandlestickOptions"
import { FC, useState } from 'react'
import { getLamBirthWeightDistribution } from '@/api/Weigh'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'

interface OptionsI {
    // data: number[]
}

const WeighCandlestick: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState<any>({})

    const getData = () => {
        getLamBirthWeightDistribution().then((res: any) => {
            if (res.code === 200 && res.data) {
                setData(res.data)
                // const a = {xAxisList: ["2024-4", "2024-6"], list: [
                //     {name: "2024-4", value: [5, 6, 10]}, 
                //     {name: "2024-6", value: [7, 5, 9, 6, 7, 10, 6]},
                // ]}
                // setData(a)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={candlestickOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default WeighCandlestick