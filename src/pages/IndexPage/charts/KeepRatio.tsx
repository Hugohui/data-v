import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { keepRatioOptions } from "./KeepRatioOptions"
import { FC } from 'react'

interface KeepRatioInfoI {
    name: string,
    value: number
}

interface KeepRatioI {
    data: KeepRatioInfoI[]
}

const KeepRatio: FC<KeepRatioI> = ({ data }) => {
    const renderer = useConfigStore((state) => state.renderer)

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