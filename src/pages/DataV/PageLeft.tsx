import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import Dialog from "../../components/Dialog"
import { useState } from "react"
import { EvaluateTable } from "./charts/EvaluateTable"
import FodderBar from "./charts/FodderBar"
import ClearDungBarLine from "./charts/ClearDungBarLine"

export const PageLeft = () => {
    const [showDialog, setShowDialog] = useState(false)

    return (
        <PageLeftStyle>
            <Dialog title="全部饲喂草料量" show={showDialog} setShow={setShowDialog}>
                iiii
            </Dialog>

            <BorderBox title="育肥水平评估">
                <EvaluateTable></EvaluateTable>
            </BorderBox>
            <BorderBox title="饲喂草料量">
                <FodderBar></FodderBar>
            </BorderBox>
            <BorderBox title="清粪概况">
                <ClearDungBarLine></ClearDungBarLine>
            </BorderBox>
        </PageLeftStyle>
    )
}