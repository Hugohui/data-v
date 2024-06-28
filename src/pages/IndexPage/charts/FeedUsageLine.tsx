import { FC, useState } from 'react'
import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { feedUsageOptions } from "./FeedUsageLineOptions"
import MonthYearSwitch from '../../../components/MonthYearSwitch'

const testYearData = [934, 1290, 1330, 1320, 1500, 2000, 908]
const testMonthData = [93, 129, 130, 1020, 600, 290, 668]

const FeedUsageLine = () => {
    const renderer = useConfigStore((state) => state.renderer)
    const [testData, setData] = useState(testYearData)

    const onChange = (value: string) => {
        if (value == 'year') {
            setData(testYearData)
        } else {
            setData(testMonthData)
        }
       
    }

    return (
        <>
            <MonthYearSwitch active='year' onChange={onChange}></MonthYearSwitch>
            {(testData) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={feedUsageOptions(testData)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default FeedUsageLine