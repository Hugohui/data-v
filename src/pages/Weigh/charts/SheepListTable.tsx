import CustomTable from "../../../components/CustomTable"

export const SheepListTable = () => {
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
    return (
        <CustomTable columns={columns} data={data} hiddenIndex={true}></CustomTable>
    )
}