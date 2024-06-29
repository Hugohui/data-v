import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineOptions } from "./LUXLineOptions"
import { FC, useState } from 'react'

interface OptionsI {
    // data: number[]
}

const testData = [20, 20, 15, 8, 7, 11, 13, 23, 25]

const LUXLine: FC<OptionsI> = (options) => {
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

export default LUXLine