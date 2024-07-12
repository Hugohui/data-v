import { useEffect, useState } from "react"
import CustomTable from "../../../components/CustomTable"
import useEvent from "../../../hooks/useEventHook"
import { getSheepList } from "@/api/Weigh"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"

export const SheepListTable = () => {
    const { publish } = useEvent()

    const onItemClick = (item: any, index: any) => {
        publish("onSheepSelectEmit", item)
    }

    const columns = [
        {
            key: "CowCode",
            name: "编号"
        },
        {
            key: "monAge",
            name: "月龄"
        },
        {
            key: "Weight",
            name: "体重"
        },
        {
            key: "weightDate",
            name: "称重日期"
        },
    ]

    const [data, setData] = useState<any>([])

    const getData = () => {
        getSheepList().then((res: any) => {
            if (res.code === 200 && res.data) {
                setData([...res.data, ...res.data])
            }
        })
    }

    useIntervalRequest(getData)

    useEffect(() => {
        setTimeout(() => {
            publish("onSheepSelectEmit", data[0])
        }, 0)
    }, [data])

    return (
        <CustomTable
            columns={columns}
            data={data}
            hiddenIndex={true}
            onRowClick={onItemClick}
            canSelectItem={true}
        ></CustomTable>
    )
}