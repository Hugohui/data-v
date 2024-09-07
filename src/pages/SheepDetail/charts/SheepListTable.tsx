import { useEffect, useState } from "react"
import CustomTable from "../../../components/CustomTable"
import useEvent from "../../../hooks/useEventHook"
import { getBaseCowInfoByBarn } from "@/api/SheepDetail"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"
import { useGetParams } from "@/hooks/useGetParams"

export const SheepListTable = () => {
    const { publish } = useEvent()
    const CowBarnID = useGetParams('id')

    const onItemClick = (item: any, index: any) => {
        publish("onSheepDetailSelectEmit", item)
    }

    const columns = [
        {
            key: "CowCode",
            name: "羊只编号"
        },
        {
            key: "EarTagCode",
            name: "耳标号"
        },
        {
            key: "CowSex",
            name: "性别"
        },
        {
            key: "monthAge",
            name: "月龄"
        },
        {
            key: "BreedName",
            name: "品种"
        },
        {
            key: "HealthState",
            name: "健康状况"
        },
    ]

    const [data, setData] = useState<any>([])

    const getData = () => {
        getBaseCowInfoByBarn({
            CowBarnID: Number(CowBarnID),
            Pages: 1
        }).then((res: any) => {
            if (res.code === 200 && res.data) {
                setData(res.data)
                publish("onSheepDetailSelectEmit", res?.data?.[0])
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
            loopDelayTime={5000}
        ></CustomTable>
    )
}