import { FC, useEffect, useState } from 'react'
import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { barOptions } from "./PropagateBarOptions"
import { getSummCompBreedEventsEachPast } from '../../../api/Health'
import useInterval from '../../../hooks/useInterval'

interface OptionsI {
    // data: number[]
}

const PropagateBar: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>()

    const getData = () => {
        getSummCompBreedEventsEachPast().then((res: any) => {
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
                    option={barOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default PropagateBar