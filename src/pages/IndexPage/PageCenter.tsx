import { useEffect, useState } from "react"

import Map from "./charts/Map"
import { PageCenterStyle } from "./style"
// import { get } from "../../api/http"
// import { centerPageDataApi } from "../../api/mock"
// import { ResultEnum } from "../../enums/httpEnum"
import centerPageData from "../../api/mock/centerPageData"




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
                <Map mapData={centerData.mapData}></Map>
        </PageCenterStyle>
    )
}