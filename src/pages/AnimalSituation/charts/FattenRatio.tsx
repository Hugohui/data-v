import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { ratioOptions } from "./FattenRatioOptions"
import { FC, useState } from 'react'

interface RatioInfoI {
    name: string,
    value: number
}

interface RatioI {
    data: RatioInfoI[]
}

const testData = [
    { value: 1048, name: '公羊' },
    { value: 735, name: '泌乳羊' },
    { value: 345, name: '育肥羊' },
    { value: 456, name: '羔羊' },
    { value: 123, name: '繁殖母羊' },
]

const FattenRatio: FC<RatioI> = (options) => {
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

export default FattenRatio