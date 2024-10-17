import { useEffect, useRef, useState } from "react"
import CustomTable from "../../../components/CustomTable"
import useEvent from "../../../hooks/useEventHook"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"
import { getListDairyProducingSheep } from "@/api/Milk"

export const DayMilkProductSheepListTable = () => {
    const { publish } = useEvent()
    const sortRef = useRef('desc')

    const columns = [
        {
            key: "CowCode",
            name: "羊只编号"
        },
        {
            key: "Yield",
            name: "产奶量",
            sort: 'desc'
        },
        {
            key: "CowGroup",
            name: "羊舍"
        },
    ]

    const [data, setData] = useState<any>([])

    const getData = () => {
        getListDairyProducingSheep({
            TimeModel: '日',
            sort: sortRef.current
        }).then((res: any) => {
            if (res.code === 200 && res.data) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    const onTableSort = (data: any) => {
        sortRef.current = data.sort
        getData()
    }

    useEffect(() => {
        setTimeout(() => {
            publish("onSheepSelectEmit", data[0])
        }, 0)
    }, [data])

    return (
        <CustomTable
            columns={columns}
            data={data}
            autoLoop={false}
            onSort={onTableSort}
            // hiddenIndex={true}
            // onRowClick={onItemClick}
            // canSelectItem={true}
            // loopDelayTime={5000}
        ></CustomTable>
    )
}