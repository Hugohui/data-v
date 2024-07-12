import { FC, useEffect, useRef, useState } from "react"
import { TableStyle } from "./CustomTableStyle"
import { isNode } from "@/utils/dom";
import { useMountedState } from "@/hooks/useMountedState";

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
    const { columns, data, hiddenIndex, onRowClick, canSelectItem, defaultSelectIndex, autoLoop=true } = props;
    let [currentSelect, setCurrentSelect] = useState(defaultSelectIndex || 0);
    const tableRef = useRef<any>()
    const tbodyRef = useRef<any>()
    const tableViewRef= useRef<any>()
    const isMounted = useMountedState()
    const originTableData = useRef<any>([])
    const [tableData, setTableData] = useState<any>([])
    const wheelTimeoutRef = useRef<any>()
    const timerRef = useRef<any>()
    const currentSelectRef = useRef<any>(0)
    

    const rowClick = (row: any, index: any) => {
        resetInterval()
        setCurrentSelect(index)
        currentSelectRef.current = index
        onRowClick && onRowClick(row, index)
    }

    const scrollTable = () => {
        if (!tbodyRef.current) return;

        if (tableViewRef.current.scrollHeight > tableViewRef.current.clientHeight) {
            // 如果列表超过一页，选中状态始终第一个，轮播数据
            originTableData.current?.push(originTableData.current?.splice(0,1)[0])
            const currentData = JSON.parse(JSON.stringify(originTableData.current))
            setTableData(currentData)
            onRowClick && onRowClick(currentData[currentSelectRef.current], currentSelectRef.current)
        } else {
            // 如果列表不超过一页，则切换选中状态
            if (currentSelectRef.current >= data.length - 1) {
                currentSelectRef.current = 0
            } else {
                currentSelectRef.current++
            }
            onRowClick && onRowClick(data[currentSelect], currentSelect)
            setCurrentSelect(currentSelectRef.current)
        }
    }

    const resetInterval = () => {
        if (wheelTimeoutRef.current) {
            clearTimeout(wheelTimeoutRef.current)
        }
        wheelTimeoutRef.current = setTimeout(() => {
            timerRef.current = setInterval(scrollTable, 3000)
        }, 6000)
        timerRef.current && clearInterval(timerRef.current)
    }

    useEffect(() => {
        if (isMounted && data.length > 0) {
            originTableData.current = JSON.parse(JSON.stringify(data));
            setTableData(data);
            if(autoLoop) {
                timerRef.current = setInterval(scrollTable, 3000);

                // 鼠标滚轮滚动时清楚滚动效果，滚轮停止6秒后恢复
                tableRef.current.addEventListener('wheel', () => {
                    resetInterval()
                })
            }
        }

        return () => {
            timerRef.current && clearInterval(timerRef.current)
            wheelTimeoutRef.current && clearTimeout(wheelTimeoutRef.current)
        }
    }, [isMounted, data])

    return (
        <TableStyle ref={tableViewRef}>
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
                    {tableData?.map((row: any, index: number) => (
                        <tr
                            key={index}
                            onClick={() => rowClick(row, index)} 
                            className={[currentSelect === index && canSelectItem? 'active': '', canSelectItem ? 'canSelect' : ''].join(' ')}
                        >
                            {!hiddenIndex ? <td key={`td_index_${index}`}>{index + 1}</td> : ''}
                            {columns.map(column => (
                                <td key={`td_${index}_${column.key}`}>{row[column.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableStyle>
    )
}

export default CustomTable