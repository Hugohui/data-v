import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineOptions } from "./MilkYieldLineOptions"
import { FC, useEffect, useRef, useState } from 'react'
import { getMilkProduction } from '@/api/DataV'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'
import MonthYearSwitch from '@/components/MonthYearSwitch'


interface OptionsI {
    // data: KeepRatioInfoI[]
}
const MilkYieldLine: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    let hasChange = useRef<boolean>(false);
    const [data, setData] = useState({})
    const [dataType, setDataType] = useState<any>()

    const getData = () => {
        getMilkProduction({
            type: dataType
        }).then((res: any) => {
            if (res.data) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

     const onChange = (value: string) => {
        hasChange.current = true
        if (value === 'year') {
            setDataType(undefined)
        } else {
            setDataType('month')
        }
    }

    useEffect(() => {
        if (hasChange.current) {
            getData()
        }
    }, [dataType])

    return (
        <>
            <MonthYearSwitch active='year' onChange={onChange}></MonthYearSwitch>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={lineOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default MilkYieldLine