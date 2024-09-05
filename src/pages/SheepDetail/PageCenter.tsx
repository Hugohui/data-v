import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

import { PageCenterStyle, InfoBoxStyle } from "./style"
// import centerPageData from "../../api/mock/centerPageData"
import { BorderBox } from "../../components/basic/BorderBox"
import { SheepListTable } from "./charts/SheepListTable"
import { SheepInfo } from "./charts/SheepInfo"

export const PageCenter = () => {
    const navigate = useNavigate()
    const [centerData, setCenterData] = useState<{mapData?: any}>({})

    const fetchMapData = async () => {
        // const res = await get(centerPageDataApi)
        // if (res.code === ResultEnum.SUCCESS) {
        //     setCenterData(res.data)
        // }
        // setCenterData(centerPageData)
    }

    const toDataV = () => {
        navigate('/dataV')
    }

    useEffect(() => {
        fetchMapData()
    }, [])

    return (
        <PageCenterStyle>
            <InfoBoxStyle>
                <SheepInfo></SheepInfo>
            </InfoBoxStyle>
            <BorderBox hideTitle={true} height="428">
                <SheepListTable></SheepListTable>
            </BorderBox>
        </PageCenterStyle>
    )
}