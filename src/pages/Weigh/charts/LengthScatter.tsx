import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { scatterOptions } from "./LengthScatterOptions"
import { FC, useEffect, useRef, useState } from 'react'
import { getWeightDistribuMapDifferenPastAges } from '@/api/Weigh'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'
import useEvent from '@/hooks/useEventHook'

interface OptionsI {
    // data: number[]
}

const LengthScatter: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)
    const { subscribe } = useEvent()

    const [data, setData] = useState<any>({list: []})
    const infoRef = useRef<any>({})
    const [CowCode, setCowCode] = useState();

    const getData = () => {
        getWeightDistribuMapDifferenPastAges({
            CowCode: infoRef.current.CowCode
        }).then((res: any) => {
            if (res.code === 200 && res.data) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    useEffect(() => {
        subscribe('onSheepSelectEmit', (data: any) => {
            if (data) {
                infoRef.current = data
                setCowCode(data.CowCode)
                getData()
            }
        })
    }, [])

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={scatterOptions({...data, CowCode})}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default LengthScatter