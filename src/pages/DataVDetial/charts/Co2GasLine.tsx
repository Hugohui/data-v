import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineOptions } from "./Co2GasLineOptions"
import { FC, useState } from 'react'

interface OptionsI {
    // data: number[]
}

const testData = [20, 20, 15, 8, 7, 11, 13, 23, 25]

const Co2GasLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState(testData)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={lineOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default Co2GasLine