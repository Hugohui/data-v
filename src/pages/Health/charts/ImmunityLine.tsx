import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineOptions } from "./ImmunityLineOptions"
import { FC, useState } from 'react'
import { getCowImmuneStatisticsYear } from '../../../api/Health'
import { useIntervalRequest } from '../../../hooks/useIntervalRequest'


interface OptionsI {
    // data: KeepRatioInfoI[]
}

const ImmunityLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>()

    const formatData = (data: any) => {
        const params: any = {}

        const nameData: any = {}
        data?.list?.forEach((item: any) => {
            if(!nameData[item.name]) {
                nameData[item.name] = []
            }
            nameData[item.name].push(item.value)
        })

        params['legendData'] = Object.keys(nameData)
        params['data'] = nameData
        params['xAxislist'] = data.xAxislist
        
        return params
    }

    const getData = () => {
        getCowImmuneStatisticsYear().then((res) => {
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

export default ImmunityLine