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

const testData = [3, 4, 5, 6]

const PlanFunnel: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState(testData)

    const formatData = (data: any) => {
        return data?.map((item: any) => {
            return {
                name: item.FodderName,
                value: item.FodderPlanWeight
            }
        }).slice(-15)
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