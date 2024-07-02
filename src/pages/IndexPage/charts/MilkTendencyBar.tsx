import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { milkTendencyBarOptions } from "./MilkTendencyBarOptions"
import { FC, useState } from 'react'
import { getMonthMilkHerdsTrend } from '../../../api/IndexPage/index'
import { useIntervalRequest } from '../../../hooks/useIntervalRequest'

interface OptionsI {}

const MilkTendencyBar: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>()

    const getData = () => {
        getMonthMilkHerdsTrend().then((res: any) => {
            if (res.code === 200) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

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