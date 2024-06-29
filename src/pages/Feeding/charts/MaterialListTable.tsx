import CustomTable from "../../../components/CustomTable"

export const MaterialListTable = () => {
    const columns = [
        {
            key: "time",
            name: "班次"
        },
        {
            key: "name",
            name: "车次"
        },
        {
            key: "all",
            name: "计划重量"
        },
        {
            key: "all",
            name: "实际重量"
        },
        {
            key: "all",
            name: "误差量"
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