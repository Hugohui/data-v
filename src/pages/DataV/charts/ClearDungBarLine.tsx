import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { barOptions } from "./ClearDungBarLineOptions"
import { FC, useState } from 'react'

interface OptionsI {
    // data: number[]
}

const testData = [120, 200, 150, 80, 70, 110, 130, 23, 45]

const ClearDungBarLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState(testData)

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

export default ClearDungBarLine