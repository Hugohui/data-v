import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { lineOptions } from "./CowMilkYieldLineOptions"
import { FC, useEffect, useRef, useState } from 'react'
import { getSheepMilkProdDatAnaStatiListLine } from '@/api/Milk'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'
import useEvent from '@/hooks/useEventHook'
import MonthYearSwitch from '@/components/MonthYearSwitch'


interface OptionsI {
    // data: KeepRatioInfoI[]
    info: any
}

const CowMilkYieldLine: FC<OptionsI> = ({ info }) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>([])
    const [dataType, setDataType] = useState<any>()
    let hasChange = useRef<boolean>(false);

    const getData = () => {
        getSheepMilkProdDatAnaStatiListLine({
            CowCode: info.CowCode,
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
        setDataType(value)
    }

    useEffect(() => {
        if (hasChange.current) {
            getData()
        }
    }, [dataType])

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%'}}>
            <MonthYearSwitch active='year' onChange={onChange}></MonthYearSwitch>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={lineOptions(data)}
                />
            ) : (
                ''
            )}
        </div>
    )
}

export default CowMilkYieldLine