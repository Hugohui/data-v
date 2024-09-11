import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { barOptions } from "./FodderBarOptions"
import { FC, useEffect, useRef, useState } from 'react'
import { getForageFeeding } from '@/api/DataV'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'
import MonthYearSwitch from '@/components/MonthYearSwitch'
import useEvent from '@/hooks/useEventHook'

interface OptionsI {
    // data: number[]
}

const FodderBar: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const { publish } = useEvent()

    let hasChange = useRef<boolean>(false);
    const [data, setData] = useState<any>({})
    // const [dataType, setDataType] = useState<any>()

    const getData = () => {
        getForageFeeding({
            // type: dataType
        }).then((res: any) => {
            if (res.data) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    // const onChange = (value: string) => {
    //     hasChange.current = true
    //     if (value === 'year') {
    //         setDataType(undefined)
    //     } else {
    //         setDataType('month')
    //     }
    //     publish('onDataVFodderMonthYearSwitch', value)
    // }

    // useEffect(() => {
    //     if (hasChange.current) {
    //         getData()
    //     }
    // }, [dataType])
    

    return (
        <>
            {/* <MonthYearSwitch active='year' onChange={onChange}></MonthYearSwitch> */}
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

export default FodderBar