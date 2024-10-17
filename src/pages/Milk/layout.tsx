import { PageContent } from "./style"
import { PageTop } from "./PageTop"
import { PageBottom } from "./PageBottom"
import { PageMiddle } from "./PageMiddle"
import Dialog from "@/components/basic/Dialog"
import { useEffect, useState } from "react"
import { SheepListTable } from "./charts/SheepListTable"
import useEvent from "@/hooks/useEventHook"
import { SheepMonthListTable } from "./charts/SheepMonthListTable"
import { DayMilkProductSheepListTable } from "./charts/DayMilkProductSheepListTable"

export const MilkLayout = () => {
    const { subscribe } = useEvent()
    const [showDialog, setShowDialog] = useState(false)
    const [showDayMilkDialog, setShowDayMilkDialog] = useState(false)
    const [showListDialog, setShowListDialog] = useState(false)
    const [sheepInfo, setSheepInfo] = useState<any>()

    useEffect(() => {
        // 日产奶监听
        subscribe('onMilkProductClick', () => {
            setShowDayMilkDialog(true)
        })

        // 月产奶监听
        subscribe('onMilkMonthProductLineClick', (data: any) => {
            if (data) {
                setSheepInfo(data)
                setShowListDialog(true)
            }
        })

        // 班次日产奶监听
        subscribe('onMilkProductLineClick', (data: any) => {
            if (data) {
                setSheepInfo(data)
                setShowDialog(true)
            }
        })
    }, [])

    return (
        <PageContent>
            {/* 日产奶量 */}
            <Dialog title="日产奶量羊只列表" width={800} show={showDayMilkDialog} setShow={setShowDayMilkDialog}>
                <DayMilkProductSheepListTable></DayMilkProductSheepListTable>
            </Dialog>

            {/* 月产奶量弹窗 */}
            <Dialog 
                title={`${sheepInfo?.month}月产奶羊只列表`} 
                width={800} show={showListDialog} 
                setShow={setShowListDialog}
                search={{
                    placeholder: '羊只编号',
                    onSearch: (data: any) => {
                        console.log('===onSearch====', data)
                        // setSheepInfo({...sheepInfo, CowCode: data})
                    }
                }}
            >
                <SheepMonthListTable info={sheepInfo}></SheepMonthListTable>
            </Dialog>

            {/* 班次日产奶量 */}
            <Dialog title="日产奶量羊只列表" width={800} show={showDialog} setShow={setShowDialog}>
                <SheepListTable info={sheepInfo}></SheepListTable>
            </Dialog>

            <PageTop></PageTop>
            <PageMiddle></PageMiddle>
            <PageBottom></PageBottom>
        </PageContent>
    )
}