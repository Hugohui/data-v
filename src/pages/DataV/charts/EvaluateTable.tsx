import { useState } from "react"
import CustomTable from "../../../components/CustomTable"
import { getFattLevelRecent6Months } from "@/api/DataV"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"

export const EvaluateTable = () => {
    const columns = [
        // {
        //     key: "breedName",
        //     name: "羊只品种"
        // },
        {
            key: "OffSiteDate",
            name: "离场批次"
        },
        {
            key: "FeedDays",
            name: "饲养天数"
        },
        {
            key: "AvgOffsiteWeight",
            name: "平均出栏体重"
        },
        {
            key: "dailyGain",
            name: "日增重"
        },
        {
            key: "feedConversionRatio",
            name: "料肉比"
        },
    ]

    const [data, setData] = useState<any>([])

    const getData = () => {
       getFattLevelRecent6Months().then((res: any) => {
            if (res.code === 200 && res.data) {
                setData(res.data)
            }
       })
    }

    useIntervalRequest(getData)

    return (
        <CustomTable columns={columns} data={data} hiddenIndex={true}></CustomTable>
    )
}