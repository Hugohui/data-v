import { useEffect, useState } from "react"
import CustomTable from "../../../components/CustomTable"
import useEvent from "../../../hooks/useEventHook"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"
import { getListDairyProducingSheep } from "@/api/Milk"

export const SheepListTable = ({ info }: any) => {
    const { publish } = useEvent()

    const columns = [
        {
            key: "CowCode",
            name: "羊只编号"
        },
        {
            key: "Yield",
            name: "产奶量"
        },
        {
            key: "CowGroup",
            name: "羊舍"
        },
    ]

    const [data, setData] = useState<any>([])

    const getData = () => {
        getListDairyProducingSheep({
            shift: info?.shift,
            Pages: 1
        }).then((res: any) => {
            if (res.code === 200 && res.data) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <CustomTable
            columns={columns}
            data={data}
            autoLoop={false}
        ></CustomTable>
    )
}