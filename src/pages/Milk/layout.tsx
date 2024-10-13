import { PageContent } from "./style"
import { PageTop } from "./PageTop"
import { PageBottom } from "./PageBottom"
import { PageMiddle } from "./PageMiddle"
import Dialog from "@/components/basic/Dialog"
import { useEffect, useState } from "react"
import { SheepListTable } from "./charts/SheepListTable"
import useEvent from "@/hooks/useEventHook"
import { SheepMonthListTable } from "./charts/SheepMonthListTable"

export const MilkLayout = () => {
    const { subscribe } = useEvent()
    const [showDialog, setShowDialog] = useState(false)
    const [showListDialog, setShowListDialog] = useState(false)
    const [sheepInfo, setSheepInfo] = useState<any>()

    useEffect(() => {
        subscribe('onMilkProductLineClick', (data: any) => {
            if (data) {
                setSheepInfo(data)
                setShowDialog(true)
            }
        })

        subscribe('onMilkMonthProductLineClick', (data: any) => {
            if (data) {
                setSheepInfo(data)
                setShowListDialog(true)
            }
        })
    }, [])

    return (
        <PageContent>
            <Dialog title="日产奶量羊只列表" width={800} show={showDialog} setShow={setShowDialog}>
                <SheepListTable info={sheepInfo}></SheepListTable>
            </Dialog>

            <Dialog title={`${sheepInfo?.month}月产奶羊只列表`} width={800} show={showListDialog} setShow={setShowListDialog}>
                <SheepMonthListTable info={sheepInfo}></SheepMonthListTable>
            </Dialog>

            <PageTop></PageTop>
            <PageMiddle></PageMiddle>
            <PageBottom></PageBottom>
        </PageContent>
    )
}