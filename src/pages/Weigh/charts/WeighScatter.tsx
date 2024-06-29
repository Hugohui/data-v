import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { scatterOptions } from "./WeighScatterOptions"
import { FC, useState } from 'react'

interface OptionsI {
    // data: number[]
}

const testData = [120, 200, 150, 80, 70, 110, 130, 23, 45]

const WeighScatter: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState(testData)

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

export default WeighScatter