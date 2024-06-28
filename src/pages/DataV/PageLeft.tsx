import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import Dialog from "../../components/Dialog"
import { useState } from "react"

export const PageLeft = () => {
    const [showDialog, setShowDialog] = useState(true)

    return (
        <PageLeftStyle>
            <Dialog title="全部饲喂草料量" show={showDialog} setShow={setShowDialog}>
                iiii
            </Dialog>

            <BorderBox title="育肥水平评估"></BorderBox>
            <BorderBox title="饲喂草料量"></BorderBox>
            <BorderBox title="清粪概况"></BorderBox>
        </PageLeftStyle>
    )
}