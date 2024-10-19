import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineOptions } from "./MilkYieldLineOptions"
import { FC, useState } from 'react'
import { getGroupMonthTotalMilkProStatistics } from '@/api/Milk'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'
import useEvent from '@/hooks/useEventHook'


interface OptionsI {
    // data: KeepRatioInfoI[]
}

const MilkYieldLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const { publish } = useEvent()

    const [data, setData] = useState<any>([])

    const getData = () => {
        getGroupMonthTotalMilkProStatistics().then((res: any) => {
            if (res.data) {
                setData(res.data)
            }
        })
    }

    const onChartClick = (params: any) => {
        publish("onMilkMonthProductLineClick", {month: params.name})
    }

    useIntervalRequest(getData)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={lineOptions(data)}
                    onClick={onChartClick}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default MilkYieldLine