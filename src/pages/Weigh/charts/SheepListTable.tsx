import { useEffect } from "react"
import CustomTable from "../../../components/CustomTable"
import useEvent from "../../../hooks/useEventHook"

export const SheepListTable = () => {
    const { publish } = useEvent()

    const onItemClick = (item: any, index: any) => {
        publish("onSheepSelectEmit", item)
    }

    const columns = [
        {
            key: "a",
            name: "编号"
        },
        {
            key: "b",
            name: "月龄"
        },
        {
            key: "c",
            name: "体重"
        },
        {
            key: "d",
            name: "称重日期"
        },
    ]

    const data = [
        {
            d: '2023.04.18',
            c: '产羔记录',
            b: 20,
            a: 20,
        },
        {
            d: '2023.04.23',
            c: '产羔记录22',
            b: 2,
            a: 1,
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            publish("onSheepSelectEmit", data[0])
        }, 0)
    }, [])

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