import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { forageYieldOptions } from "./ForageYieldOptions"
import { FC, useState, useEffect } from 'react'
import { getHalfYearEveryPasturdePartureStatics } from '../../../api/AnimalSituation'
import { useIntervalRequest } from '../../../hooks/useIntervalRequest'

interface OptionsI {
}

const ForageYield: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const [data, setData] = useState<any>()

    const getData = () => {
        getHalfYearEveryPasturdePartureStatics().then((res) => {
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
                    option={forageYieldOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default ForageYield