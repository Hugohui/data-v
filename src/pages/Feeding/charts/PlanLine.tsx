import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { blankErrorRateLineOptions } from "./PlanLineOptions"
import { FC, useState } from 'react'
import { getWeekBillData } from '@/api/Feeding'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'


interface OptionsI {
    // data: KeepRatioInfoI[]
}

const PlanLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>({})

    const getData = () => {
        getWeekBillData().then((res: any) => {
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
                    option={blankErrorRateLineOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default PlanLine