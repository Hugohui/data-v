import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { dungClearOptions } from "./DungClearOptions"
import { FC, useState } from 'react'

interface RatioI {
    // data: RatioInfoI[]
    title: string
    value: number
    formatter: string
    backgroundColor?: string[] // 颜色数组，0 背景色 1 开始色 2 结束色
}


const DungClear: FC<RatioI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    console.log("========", options)

    // const [data, setData] = useState(80)


    return (
        <>
            {(options) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={dungClearOptions(options)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default DungClear