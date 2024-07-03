import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineOptions } from "./MilkYieldLineOptions"
import { FC, useState } from 'react'
import { getMilkProduction } from '@/api/DataV'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'


interface OptionsI {
    // data: KeepRatioInfoI[]
}
const MilkYieldLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState([])

    const getData = () => {
        getMilkProduction().then((res: any) => {
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
                    option={lineOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default MilkYieldLine