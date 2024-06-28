import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { sheepTendencyBarOptions } from "./SheepTendencyBarOptions"
import { FC } from 'react'

interface SheepTendencyI {
    data: number[]
}

const SheepTendencyBar: FC<SheepTendencyI> = ({ data }) => {
    const renderer = useConfigStore((state) => state.renderer)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={sheepTendencyBarOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default SheepTendencyBar