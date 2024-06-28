import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { sheepTypeOptions } from "./SheepTypeOptions"
import { FC } from 'react'

interface KeepRatioInfoI {
    name: string,
    value: number
}

interface KeepRatioI {
    data: KeepRatioInfoI[]
}

const SheepType: FC<KeepRatioI> = ({ data }) => {
    const renderer = useConfigStore((state) => state.renderer)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={sheepTypeOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default SheepType