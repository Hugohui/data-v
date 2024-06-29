import CustomTable from "../../../components/CustomTable"

export const ComeOutRecordTable = () => {
    const columns = [
        {
            key: "time",
            name: "车牌号"
        },
        {
            key: "name",
            name: "货品类别"
        },
        {
            key: "all",
            name: "过磅时间"
        },
        {
            key: "all",
            name: "毛重"
        },
        {
            key: "all",
            name: "皮重"
        },
        {
            key: "all",
            name: "净重"
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
    return (
        <CustomTable columns={columns} data={data} hiddenIndex={true}></CustomTable>
    )
}