import CustomTable from "../../../components/CustomTable"

export const FeedTable = () => {
    const columns = [
        {
            key: "time",
            name: "时间"
        },
        {
            key: "name",
            name: "名称"
        },
        {
            key: "all",
            name: "汇总"
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
        <CustomTable columns={columns} data={data}></CustomTable>
    )
}