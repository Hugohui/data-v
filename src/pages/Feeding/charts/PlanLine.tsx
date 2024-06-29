import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { blankErrorRateLineOptions } from "./PlanLineOptions"
import { FC, useState } from 'react'


interface OptionsI {
    // data: KeepRatioInfoI[]
}

const testData = [300, 1234, 2455, 2006]

const PlanLine: FC<OptionsI> = (options) => {
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

export default PlanLine