import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineineOptions } from "./MilkProductLineOptions"
import { FC, useState } from 'react'
import { getTrendChartMilkProductPerShift } from '@/api/Milk'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'
import useEvent from '@/hooks/useEventHook'


interface OptionsI {
    // data: KeepRatioInfoI[]
}


const MilkProductLine: FC<OptionsI> = (options) => {
    const { publish } = useEvent()
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>()

    const getData = () => {
        getTrendChartMilkProductPerShift().then((res: any) => {
            if ( res.data ) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    const onChartClick = (params: any) => {
        const dataIndex = params?.params?.dataIndex
        const clickItem = data[dataIndex]
        publish("onMilkProductLineClick", clickItem)
    }

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={lineineOptions(data)}
                    onClick={onChartClick}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default MilkProductLine