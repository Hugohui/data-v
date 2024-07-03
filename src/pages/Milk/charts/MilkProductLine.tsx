import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineineOptions } from "./MilkProductLineOptions"
import { FC, useState } from 'react'
import { getTrendChartMilkProductPerShift } from '@/api/Milk'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'


interface OptionsI {
    // data: KeepRatioInfoI[]
}


const MilkProductLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>([])

    const getData = () => {
        getTrendChartMilkProductPerShift().then((res: any) => {
            if ( res.data ) {
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
                    option={lineineOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default MilkProductLine