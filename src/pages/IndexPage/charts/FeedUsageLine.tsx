import { useState } from 'react'
import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { feedUsageOptions } from "./FeedUsageLineOptions"
import { getFeedUsageTrend } from '../../../api/IndexPage'
import { useIntervalRequest } from '../../../hooks/useIntervalRequest'
// import MonthYearSwitch from '../../../components/MonthYearSwitch'

const FeedUsageLine = () => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>([])

    const getData = () => {
        getFeedUsageTrend({
            type: "month"
        }).then((res: any) => {
            if (res.code === 200) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    // const onChange = (value: string) => {
    //     if (value === 'year') {
    //         setData(testYearData)
    //     } else {
    //         setData(testMonthData)
    //     }
       
    // }

    return (
        <>
            {/* <MonthYearSwitch active='year' onChange={onChange}></MonthYearSwitch> */}
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={feedUsageOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default FeedUsageLine