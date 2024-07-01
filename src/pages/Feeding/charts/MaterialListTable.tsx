import { useEffect, useState } from "react"
import CustomTable from "../../../components/CustomTable"
import { getFeedIntakeList } from "../../../api/Feeding"
import useInterval from "../../../hooks/useInterval"

export const MaterialListTable = () => {
    const columns = [
        {
            key: "Shift",
            name: "班次"
        },
        {
            key: "TrainNumber",
            name: "车次"
        },
        {
            key: "PlannedWeight",
            name: "计划重量"
        },
        {
            key: "ActualWeight",
            name: "实际重量"
        },
        {
            key: "ErrorRate",
            name: "误差量"
        },
    ]

    const [data, setData] = useState<any>([])

    const getData = () => {
        getFeedIntakeList().then((res) => {
            if (res.code === 200) {
                setData(res.data)
            }
        })
    }

    useInterval(getData);

    useEffect(() => {
        getData()
    }, [])

    return (
        <CustomTable columns={columns} data={data} hiddenIndex={true}></CustomTable>
    )
}