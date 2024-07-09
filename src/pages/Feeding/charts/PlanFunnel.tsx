import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { funnelOptions } from "./PlanFunnelOptions"
import { FC, useState } from 'react'
import { getFeedDetailsList } from '@/api/Feeding'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'
import { getFarmID } from '@/utils/session'


interface OptionsI {
    // data: KeepRatioInfoI[]
}

const PlanFunnel: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState([])

    const formatData = (data: any) => {
        const res = data?.map((item: any) => {
            return {
                name: item.FodderName,
                value: item.FodderActualWeight
            }
        }).sort((a: any, b: any) => a.value - b.value).slice(-20)
        return res
    }

    const getData = () => {
        getFeedDetailsList().then((res: any) => {
            if (res?.code === 200 && res.data) {
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
                    option={funnelOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default PlanFunnel