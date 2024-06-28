import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { keepLineOptions } from "./KeepLineOptions"
import { FC, useState } from 'react'

interface KeepRatioInfoI {
    name: string,
    value: number
}

interface KeepRatioI {
    // data: KeepRatioInfoI[]
}

const testData = [1020, 230, 1250, 480, 670, 1710, 1830, 823, 945, 367, 589, 667]

const KeepRatio: FC<KeepRatioI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState(testData)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={keepLineOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default KeepRatio