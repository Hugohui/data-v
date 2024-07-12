import { useEffect, useState } from "react"
import CustomTable from "../../../components/CustomTable"
import { getReproductivEvent } from "../../../api/AnimalSituation"
import { useIntervalRequest } from "../../../hooks/useIntervalRequest"

export const FeedTable = () => {
    const columns = [
        {
            key: "dataTime",
            name: "时间"
        },
        {
            key: "name",
            name: "名称"
        },
        {
            key: "Count",
            name: "汇总"
        },
    ]

    const [data, setData] = useState<any>([])

    const getData = () => {
        getReproductivEvent().then((res) => {
            if (res.code === 200) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <CustomTable columns={columns} data={data}></CustomTable>
    )
}