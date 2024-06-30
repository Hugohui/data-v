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
            key: "time",
            name: "编号"
        },
        {
            key: "name",
            name: "月龄"
        },
        {
            key: "all",
            name: "体重"
        },
        {
            key: "all",
            name: "称重日期"
        },
    ]

    const data = [
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 20
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 20
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 20
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 20
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 20
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 20
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 20
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 20
        },
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