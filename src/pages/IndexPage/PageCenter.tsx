import { useEffect, useState } from "react"

import { PageCenterStyle } from "./style"
// import { get } from "../../api/http"
// import { centerPageDataApi } from "../../api/mock"
// import { ResultEnum } from "../../enums/httpEnum"
// import centerPageData from "../../api/mock/centerPageData"
import { BorderBox } from "../../components/basic/BorderBox"
import FeedUsageLine from "./charts/FeedUsageLine"


export const PageCenter = () => {
    const [centerData, setCenterData] = useState<{mapData?: any}>({})

    const fetchMapData = async () => {
        // const res = await get(centerPageDataApi)
        // if (res.code === ResultEnum.SUCCESS) {
        //     setCenterData(res.data)
        // }
        // setCenterData(centerPageData)
    }

    useEffect(() => {
        fetchMapData()
    }, [])

    return (
        <PageCenterStyle>
            <BorderBox title="饲料使用情况" size="large" height="294" className="FeedUsageLine">
                <FeedUsageLine></FeedUsageLine>
            </BorderBox>
        </PageCenterStyle>
    )
}