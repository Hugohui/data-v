import { PageContent } from "./style"
import { PageTop } from "./PageTop"
import { PageBottom } from "./PageBottom"
import { PageMiddle } from "./PageMiddle"
import Dialog from "@/components/basic/Dialog"
import { useEffect, useState } from "react"
import { SheepListTable } from "./charts/SheepListTable"
import useEvent from "@/hooks/useEventHook"

export const MilkLayout = () => {
    const { subscribe } = useEvent()
    const [showDialog, setShowDialog] = useState(false)
    const [sheepInfo, setSheepInfo] = useState<any>()

    useEffect(() => {
        subscribe('onMilkProductLineClick', (data: any) => {
            if (data) {
                setSheepInfo(data)
                setShowDialog(true)
            }
        })
    }, [])

    return (
        <PageContent>
            <Dialog title="产奶羊只列表" width={800} show={showDialog} setShow={setShowDialog}>
                <SheepListTable info={sheepInfo}></SheepListTable>
            </Dialog>

            <PageTop></PageTop>
            <PageMiddle></PageMiddle>
            <PageBottom></PageBottom>
        </PageContent>
    )
}