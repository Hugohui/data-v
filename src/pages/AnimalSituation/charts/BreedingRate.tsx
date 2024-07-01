import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { rateOptions } from "./BreedingRateOptions"
import { FC, useState } from 'react'

interface RatioI {
    // data: RatioInfoI[]
    title: string
    value: number
    formatter: string
    backgroundColor?: string[] // 颜色数组，0 背景色 1 开始色 2 结束色
}


const BreedingRate: FC<RatioI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    // const [data, setData] = useState(80)


    return (
        <>
            {(options) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={rateOptions(options)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default BreedingRate