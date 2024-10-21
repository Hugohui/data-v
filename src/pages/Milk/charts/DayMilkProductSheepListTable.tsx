import React, { useImperativeHandle, useRef, useState } from "react"
import CustomTable from "../../../components/CustomTable"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"
import { getListDairyProducingSheep } from "@/api/Milk"

export const DayMilkProductSheepListTable = React.forwardRef(({}: any, ref) => {
    const sortRef = useRef('desc')
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

    const [data, setData] = useState<any>([])

    const getData = () => {
        getListDairyProducingSheep({
            TimeModel: 'DAY',
            sort: sortRef.current,
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