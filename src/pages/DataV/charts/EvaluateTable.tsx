import CustomTable from "../../../components/CustomTable"

export const EvaluateTable = () => {
    const columns = [
        {
            key: "time",
            name: "羊只品种"
        },
        {
            key: "name",
            name: "饲养天数"
        },
        {
            key: "all",
            name: "平均出栏体重"
        },
        {
            key: "all",
            name: "日增重"
        },
        {
            key: "all",
            name: "料肉比"
        },
    ]

    const data = [
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 1
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 2
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 3
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 4
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 5
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 6
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 7
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 8
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 9
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 10
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 11
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 12
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 13
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 14
        },
        {
            time: '2023.04.18',
            name: '产羔记录',
            all: 15
        },
    ]
    return (
        <CustomTable columns={columns} data={data} hiddenIndex={true}></CustomTable>
    )
}