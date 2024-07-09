import { useEffect } from "react"
import CustomTable from "../../../components/CustomTable"
import useEvent from "@/hooks/useEventHook"

export const ComeOutRecordTable = ({ data }: any) => {
    const { publish } = useEvent()

    const onItemClick = (item: any, index: any) => {
        publish("onCarRecordSelectEmit", item)
    }

    const columns = [
        {
            key: "CarNumber",
            name: "车牌号"
        },
        {
            key: "GoodType",
            name: "货品类别"
        },
        {
            key: "WeightDate",
            name: "过磅时间"
        },
        {
            key: "grossWeight",
            name: "毛重"
        },
        {
            key: "tareWeight",
            name: "皮重"
        },
        {
            key: "Weight",
            name: "净重"
        },
    ]

    useEffect(() => {
        setTimeout(() => {
            publish("onCarRecordSelectEmit", data[0])
        }, 0)
    }, [data])

    return (
        <CustomTable 
            columns={columns} 
            data={data || []} 
            hiddenIndex={true} 
            canSelectItem={true}
            onRowClick={onItemClick}
        ></CustomTable>
    )
}