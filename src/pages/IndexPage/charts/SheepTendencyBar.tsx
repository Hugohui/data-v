import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { sheepTendencyBarOptions } from "./SheepTendencyBarOptions"
import { FC, useState } from 'react'
import { getMonthSheepHerdsTrend } from '../../../api/IndexPage'
import { useIntervalRequest } from '../../../hooks/useIntervalRequest'

interface OptionsI {
}

const SheepTendencyBar: FC<OptionsI> = (optionns) => {
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState<any>()

    const getData = () => {
        getMonthSheepHerdsTrend().then((res: any) => {
            if (res.code === 200 ) {
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
                    option={sheepTendencyBarOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default SheepTendencyBar