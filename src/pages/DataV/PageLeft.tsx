import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import Dialog from "../../components/basic/Dialog"
import { useEffect, useState } from "react"
import { EvaluateTable } from "./charts/EvaluateTable"
import FodderBar from "./charts/FodderBar"
import ClearDungBarLine from "./charts/ClearDungBarLine"
import AllFodderBar from "./charts/AllFodderBar"
import useEvent from "@/hooks/useEventHook"

export const PageLeft = () => {
    const [showDialog, setShowDialog] = useState(false)
    const [dataVFodderDataType, setDataVFodderDataType] = useState<any>('')
    const { subscribe } = useEvent()

    useEffect(() => {
        subscribe('onDataVFodderMonthYearSwitch', (value: string) => {
            setDataVFodderDataType(value)
        })
    }, [])

    return (
        <PageLeftStyle>
            <Dialog title="全部饲喂草料量" show={showDialog} setShow={setShowDialog}>
                <AllFodderBar dataType={dataVFodderDataType}></AllFodderBar>
            </Dialog>

            <BorderBox title="育成羊生长指数评估">
                <EvaluateTable></EvaluateTable>
            </BorderBox>
            <BorderBox title="月度饲料消耗量" moreText="全部" onMoreTextClick={() => setShowDialog(true)}>
                <FodderBar></FodderBar>
            </BorderBox>
            <BorderBox title="清粪概况">
                <ClearDungBarLine></ClearDungBarLine>
            </BorderBox>
        </PageLeftStyle>
    )
}