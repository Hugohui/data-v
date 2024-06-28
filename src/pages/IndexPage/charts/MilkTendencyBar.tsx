import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { milkTendencyBarOptions } from "./MilkTendencyBarOptions"
import { FC } from 'react'

interface MilkTendencyI {
    data: number[]
}

const MilkTendencyBar: FC<MilkTendencyI> = ({ data }) => {
    const renderer = useConfigStore((state) => state.renderer)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={milkTendencyBarOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default MilkTendencyBar