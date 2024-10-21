import React, { useImperativeHandle, useRef, useState } from "react"
import CustomTable from "../../../components/CustomTable"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"
import { getListDairyProducingSheep } from "@/api/Milk"

export const SheepMonthListTable = React.forwardRef(({ info }: any, ref) => {
    const sortRef = useRef('desc')
    const [data, setData] = useState<any>([])
    const cowCodeRef = useRef<any>()

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

    const getData = () => {
        getListDairyProducingSheep({
            TimeModel: 'MONTH',
            sort: sortRef.current,
            dateTimeStr: info.month,
            CowCode: cowCodeRef.current,
        }).then((res: any) => {
            if (res.code === 200 && res.data) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    useImperativeHandle(ref, () => ({
        queryByParams: (params: any) => {
            cowCodeRef.current = params.CowCode || undefined
            getData()
        }
    }))

    const onTableSort = (data: any) => {
        sortRef.current = data.sort
        getData()
    }

    return (
        <CustomTable
            columns={columns}
            data={data}
            autoLoop={false}
            onSort={onTableSort}
        ></CustomTable>
    )
})