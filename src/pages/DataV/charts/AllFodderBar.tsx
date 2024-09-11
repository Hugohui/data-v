import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { barOptions } from "./AllFodderBarOptions"
import { FC, useEffect, useRef, useState } from 'react'
import { getForageFeeding } from '@/api/DataV'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'
import MonthYearSwitch from '@/components/MonthYearSwitch'
import { AllFodderBarStyle } from './AllFodderBarStyle'

interface OptionsI {
    // data: number[]
    dataType: string
}

const AllFodderBar: FC<OptionsI> = ({dataType = ''}) => {
    const renderer = useConfigStore((state) => state.renderer)

    let hasChange = useRef<boolean>(false);
    const [data, setData] = useState<any>({})
    // const [dType, setDataType] = useState<any>(dataType)

    const getData = () => {
        getForageFeeding({
            // type: dType
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
    // }

    // useEffect(() => {
    //     if (hasChange.current) {
    //         getData()
    //     }
    // }, [dType])

    return (
        <AllFodderBarStyle>
            {/* <MonthYearSwitch active={dType ? dType : 'year'} onChange={onChange}></MonthYearSwitch> */}
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={barOptions(data)}
                />
            ) : (
                ''
            )}
        </AllFodderBarStyle>
    )
}

export default AllFodderBar