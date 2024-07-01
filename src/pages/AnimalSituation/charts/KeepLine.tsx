import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { keepLineOptions } from "./KeepLineOptions"
import { FC, useEffect, useState } from 'react'
import { getHalfYearEveryPasturStatics } from '../../../api/AnimalSituation'
import useInterval from '../../../hooks/useInterval'

interface OptionsI {
}

const KeepRatio: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>()

    const getData = () => {
        getHalfYearEveryPasturStatics().then((res) => {
            if (res.code === 200) {
                setData(res.data)
            }
        })
    }

    useInterval(getData)

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={keepLineOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default KeepRatio