import { FC, useState } from "react"
import { TableStyle } from "./CustomTableStyle"

interface columnsI {
    key: string
    name: string
}

interface TablePropsI {
    columns: columnsI[];
    data: any[];
    hiddenIndex?: Boolean;
    onRowClick?: Function;
    canSelectItem?: boolean
    defaultSelectIndex?: number 
}

const CustomTable: FC<TablePropsI> = (props) => {
    const { columns, data, hiddenIndex, onRowClick, canSelectItem, defaultSelectIndex } = props;
    const [currentSelect, setCurrentSelect] = useState(defaultSelectIndex || 0);

    const rowClick = (row: any, index: any) => {
        setCurrentSelect(index)
        onRowClick && onRowClick(row, index)
    }

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
                        <tr
                            key={index}
                            onClick={() => rowClick(row, index)} 
                            className={[currentSelect === index && canSelectItem? 'active': '', canSelectItem ? 'canSelect' : ''].join(' ')}
                        >
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