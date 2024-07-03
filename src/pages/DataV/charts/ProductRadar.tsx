import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { radarOptions } from "./ProductRadarOptions"
import { FC, useState } from 'react'
import { getRanchAnnualCreditLevelAssment } from '@/api/DataV'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'

interface OptionsI {
    // data: number[]
}

const ProductRadar: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState<any>({})

    const getData = () => {
        getRanchAnnualCreditLevelAssment().then((res:any) => {
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
                    option={radarOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default ProductRadar