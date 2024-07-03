import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineOptions } from "./MilkYieldLineOptions"
import { FC, useState } from 'react'
import { getGroupMonthTotalMilkProStatistics } from '@/api/Milk'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'


interface OptionsI {
    // data: KeepRatioInfoI[]
}

const MilkYieldLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>([])

    const getData = () => {
        getGroupMonthTotalMilkProStatistics().then((res: any) => {
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