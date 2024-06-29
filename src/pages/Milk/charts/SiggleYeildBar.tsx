import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { barOptions } from "./SiggleYeildBarOptions"
import { FC, useState } from 'react'

interface OptionsI {
    // data: number[]
}

const testData = [120, 200, 150, 80, 70, 110, 130, 23, 45, 120, 200, 150, 80, 
    70, 110, 130, 23, 45, 120, 200, 150, 80, 70, 110, 130, 23, 45, 80, 70, 110]

const SiggleYeildBar: FC<OptionsI> = (options) => {
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

export default SiggleYeildBar