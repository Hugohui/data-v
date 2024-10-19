import React, { useEffect, useImperativeHandle, useRef, useState } from "react"
import CustomTable from "../../../components/CustomTable"
import useEvent from "../../../hooks/useEventHook"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"
import { getSheepMilkProdDatAnaStatiBarList } from "@/api/Milk"

export const AnalysisSheepListTable = React.forwardRef(({ info }: any, ref) => {
    const { publish } = useEvent()
    const cowCodeRef = useRef<any>()
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
        getSheepMilkProdDatAnaStatiBarList({
            ...info,
            CowCode: cowCodeRef.current,
            sort: sortRef.current,
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

    const onRowClick = (data: any) => {
        publish('onAnalysisSheepTableClick', data)
    }

    return (
        <CustomTable
            columns={columns}
            data={data}
            autoLoop={false}
            onSort={onTableSort}
            onRowClick={onRowClick}
            // canSelectItem={true}
        ></CustomTable>
    )
})