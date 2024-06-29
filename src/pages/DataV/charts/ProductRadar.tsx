import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { radarOptions } from "./ProductRadarOptions"
import { FC, useState } from 'react'

interface OptionsI {
    // data: number[]
}

const testData = [120, 200, 150, 80, 70, 110, 130, 23, 45]

const ProductRadar: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState(testData)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={radarOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default ProductRadar