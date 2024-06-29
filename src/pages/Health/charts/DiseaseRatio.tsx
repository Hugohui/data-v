import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { ratioOptions } from "./DiseaseRatioOptions"
import { FC, useState } from 'react'

interface RatioInfoI {
    name: string,
    value: number
}

interface RatioI {
    // data: RatioInfoI[]
}

const testData = [
    { value: 1048, name: '子宫炎' },
    { value: 735, name: '肺炎' },
    { value: 345, name: '腹泻' },
    { value: 456, name: '肠炎' },
    { value: 123, name: '感冒' },
]

const DiseaseRatio: FC<RatioI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState(testData)


    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={ratioOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default DiseaseRatio