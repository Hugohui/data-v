import { FC } from "react"
import { TableStyle } from "./CustomTableStyle"

interface columnsI {
    key: string
    name: string
}

interface TableI {
    columns: columnsI[]
    data: any[]
    hiddenIndex?: boolean
}

const CustomTable: FC<TableI> = ({ columns, data, hiddenIndex }) => {

    return (
        <TableStyle>
            <table>
                <thead>
                    <tr>
                        { !hiddenIndex ? <th key="index">序号</th> : ''}
                        {columns.map(column => (
                            <th key={column.key}>{column.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {!hiddenIndex ? <td key={index}>{index + 1}</td> : ''}
                            {columns.map(column => (
                                <td key={column.key}>{row[column.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableStyle>
    )
}

export default CustomTable