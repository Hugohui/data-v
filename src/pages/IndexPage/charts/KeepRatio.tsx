import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { keepRatioOptions } from "./KeepRatioOptions"
import { FC, useState } from 'react'

interface KeepRatioInfoI {
    name: string,
    value: number
}

interface OptionsI {}

const KeepRatio: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>([])

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={keepRatioOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default KeepRatio