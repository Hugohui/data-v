import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { ratioOptions } from "./DiseaseRatioOptions"
import { FC, useState } from 'react'
import { getNumbeSickSheepRecentOneYear } from '@/api/Health'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'

interface RatioInfoI {
    name: string,
    value: number
}

interface RatioI {
    // data: RatioInfoI[]
}

const DiseaseRatio: FC<RatioI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState([])

    const getData = () => {
        getNumbeSickSheepRecentOneYear().then((res: any) => {
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
                    option={ratioOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default DiseaseRatio