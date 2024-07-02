import CustomTable from "../../../components/CustomTable"

export const ComeOutRecordTable = ({ data }: any) => {
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

    return (
        <CustomTable columns={columns} data={data || []} hiddenIndex={true}></CustomTable>
    )
}