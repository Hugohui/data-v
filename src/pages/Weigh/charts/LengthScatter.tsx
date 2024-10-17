import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { scatterOptions } from "./LengthScatterOptions"
import { FC, useState } from 'react'
import { getWeightDistribuMapDifferenPastAges } from '@/api/Weigh'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'

interface OptionsI {
    // data: number[]
}

const LengthScatter: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>({list: []})

    const getData = () => {
        getWeightDistribuMapDifferenPastAges().then((res: any) => {
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
                    option={scatterOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default LengthScatter