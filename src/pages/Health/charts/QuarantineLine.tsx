import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineOptions } from "./QuarantineLineOptions"
import { FC, useState } from 'react'
import { getQuarantineStatisticsYear } from '../../../api/Health'
import { useIntervalRequest } from '../../../hooks/useIntervalRequest'


interface OptionsI {
    // data: KeepRatioInfoI[]
}


const QuarantineLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>()

    const formatData = (data: any) => {
        const params: any = {}

        const nameData: any = {}
        let max = 0;
        data?.list?.forEach((item: any) => {
            if(!nameData[item.name]) {
                nameData[item.name] = []
            }
            nameData[item.name].push(item.value)
            max = Math.max(max, item.value)
        })

        params['legendData'] = Object.keys(nameData)
        params['data'] = nameData
        params['xAxislist'] = data.xAxislist
        params['max'] = max
        
        return params
    }

    const getData = () => {
        getQuarantineStatisticsYear().then((res) => {
            if (res.code === 200) {
                setData(formatData(res.data))
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

export default QuarantineLine