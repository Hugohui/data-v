import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

import { PageCenterStyle, InfoBoxStyle } from "./style"
// import centerPageData from "../../api/mock/centerPageData"
import { BorderBox } from "../../components/basic/BorderBox"
import { SheepListTable } from "./charts/SheepListTable"
import { SheepInfoProgrss } from "./charts/SheepInfoProgrss"

export const PageCenter = () => {
    return (
        <PageCenterStyle>
            <InfoBoxStyle>
                <SheepInfoProgrss></SheepInfoProgrss>
            </InfoBoxStyle>
            <BorderBox hideTitle={true} height="350" className="SheepListTable">
                <SheepListTable></SheepListTable>
            </BorderBox>
        </PageCenterStyle>
    )
}