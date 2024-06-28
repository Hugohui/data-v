import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { forageYieldOptions } from "./ForageYieldOptions"
import { FC, useState } from 'react'


interface LineOptionsI {
    // data: RatioInfoI[]
}


const testData = [1200, 2000, 1500, 800, 700, 1100, 1300, 230, 405, 670, 890, 607]

const ForageYield: FC<LineOptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState(testData)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={forageYieldOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default ForageYield