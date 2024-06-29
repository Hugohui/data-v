import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineineOptions } from "./MilkProductLineOptions"
import { FC, useState } from 'react'


interface OptionsI {
    // data: KeepRatioInfoI[]
}

const testData = [300, 400, 500, 600, 800]

const MilkProductLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState(testData)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={lineineOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default MilkProductLine