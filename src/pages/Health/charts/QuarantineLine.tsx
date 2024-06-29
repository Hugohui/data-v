import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineOptions } from "./QuarantineLineOptions"
import { FC, useState } from 'react'


interface OptionsI {
    // data: KeepRatioInfoI[]
}

const testData = [1020, 230, 1250, 480, 670, 1710, 1830, 823, 945, 367, 589, 667]

const QuarantineLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState(testData)
    const chartOptions: any = {
        data
    }

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={lineOptions(chartOptions)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default QuarantineLine