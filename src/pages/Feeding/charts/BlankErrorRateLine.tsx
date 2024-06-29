import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { blankErrorRateLineOptions } from "./BlankErrorRateLineOptions"
import { FC, useState } from 'react'


interface OptionsI {
    // data: KeepRatioInfoI[]
}

const testData = [3, 4, 5, 6]

const BlankErrorRateLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState(testData)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={blankErrorRateLineOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default BlankErrorRateLine