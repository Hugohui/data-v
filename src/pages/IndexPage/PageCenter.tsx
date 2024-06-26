import { useEffect, useState } from "react"

import Map from "./charts/Map"
import { PageCenterStyle } from "./style"
// import { get } from "../../api/http"
// import { centerPageDataApi } from "../../api/mock"
// import { ResultEnum } from "../../enums/httpEnum"
import centerPageData from "../../api/mock/centerPageData"
import { BorderBox } from "../../components/basic/BorderBox"


export const PageCenter = () => {
    const [centerData, setCenterData] = useState<{mapData?: any}>({})

    const fetchMapData = async () => {
        // const res = await get(centerPageDataApi)
        // if (res.code === ResultEnum.SUCCESS) {
        //     setCenterData(res.data)
        // }
        setCenterData(centerPageData)
    }

    useEffect(() => {
        fetchMapData()
    }, [])

    return (
        <PageCenterStyle>
            {/* <Map mapData={centerData.mapData}></Map> */}
            <BorderBox title="饲料使用情况" size="large"></BorderBox>
        </PageCenterStyle>
    )
}