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
                // const a = {xAxisList: ["1", "2", "6"], list: [
                //     {name: "1", value: [233, 400, 200, 33, 45, 67, 455]}, 
                //     {name: "2", value: [33, 200, 400, 55, 67, 89, 234]},
                //     {name: "3", value: [323, 20, 400, 155, 367, 189, 456]},
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