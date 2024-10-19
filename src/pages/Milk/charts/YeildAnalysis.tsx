import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { barOptions } from "./YeildAnalysisOptions"
import { FC, useRef, useState } from 'react'
import { getSheepMilkProdDatAnaStatiBar } from '@/api/Milk'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'
import useEvent from '@/hooks/useEventHook'

interface OptionsI {
    // data: number[]
}

const YeildAnalysis: FC<OptionsI> = (options) => {
    const { publish } =  useEvent()
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState<any>({})
    const dataRef = useRef<any>(null)

    const getData = () => {
        getSheepMilkProdDatAnaStatiBar().then((res: any) => {
            if (res.data) {
                setData(res.data || {})
                dataRef.current = res.data
            }
        })
    }

    useIntervalRequest(getData)

    const onChartClick = (params: any) => {
        if (params?.params?.seriesIndex !== 2) {
            const AvgMilkYield = dataRef.current?.avgMilkLists?.find((item: any) => item.name == params.name)?.value
            publish("onAnalysisSheepBarClick", {
                day: params.params.name,
                Conditions: params.params.seriesIndex === 1 ? "gt" : "lt",
                AvgMilkYield
            })
        }
    }

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={barOptions(data)}
                    onClick={onChartClick}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default YeildAnalysis