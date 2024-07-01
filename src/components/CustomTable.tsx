import { FC, useEffect, useRef, useState } from "react"
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
    autoLoop?: boolean
}

const CustomTable: FC<TablePropsI> = (props) => {
    const { columns, data, hiddenIndex, onRowClick, canSelectItem, defaultSelectIndex } = props;
    const [currentSelect, setCurrentSelect] = useState(defaultSelectIndex || 0);
    const tableRef = useRef<any>()
    const tbodyRef = useRef<any>()

    const rowClick = (row: any, index: any) => {
        setCurrentSelect(index)
        onRowClick && onRowClick(row, index)
    }

    const scrollTable = () => {
        if (tbodyRef.current) {
            // 获取表格的行数
            const rowCount = tbodyRef.current?.rows.length;
            const row = tbodyRef.current.getElementsByTagName('tr')[rowCount - 1];
            tbodyRef.current.insertBefore(row, tbodyRef.current.firstChild);
        }
    }

    useEffect(() => {
        let timer: any = 0;
        let wheelTimeout: any = 0;
        if(props.autoLoop) {
            timer = setInterval(scrollTable, 2000);

            // 鼠标滚轮滚动时清楚滚动效果，滚轮停止2秒后恢复
            tableRef.current.addEventListener('wheel', () => {
                if (wheelTimeout) {
                    clearTimeout(wheelTimeout)
                }
                wheelTimeout = setTimeout(() => {
                    timer = setInterval(scrollTable, 2000)
                }, 4000)
                timer && clearInterval(timer)
            })
        }

        return () => {
            timer && clearInterval(timer)
            wheelTimeout && clearTimeout(wheelTimeout)
        }
    }, [])

    return (
        <TableStyle>
            <table ref={tableRef}>
                <thead>
                    <tr>
                        { !hiddenIndex ? <th key="index">序号</th> : ''}
                        {columns.map(column => (
                            <th key={column.key}>{column.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody ref={tbodyRef}>
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