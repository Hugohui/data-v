import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { barOptions } from "./AllFodderBarOptions"
import { FC, useState } from 'react'
import { getFeedUsageTrend } from '@/api/DataV'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'

interface OptionsI {
    // data: number[]
}

const AllFodderBar: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState<any>([])

    const getData = () => {
        getFeedUsageTrend().then((res: any) => {
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
                    option={barOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default AllFodderBar