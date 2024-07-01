import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

import { PageCenterStyle } from "./style"
// import { get } from "../../api/http"
// import { centerPageDataApi } from "../../api/mock"
// import { ResultEnum } from "../../enums/httpEnum"
// import centerPageData from "../../api/mock/centerPageData"
import { BorderBox } from "../../components/basic/BorderBox"
import FeedUsageLine from "./charts/FeedUsageLine"


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
            {/* <Map mapData={centerData.mapData}></Map> */}
            <div className="enterDialog">
                <div className="name">陕西省</div>
                <div className="info">
                    <div><span>牧场名称</span>：产投集团</div>
                    <div><span>存栏数</span>：5000只</div>
                    <div><span>地址</span>：陕西省宝鸡市</div>
                </div>
                <div className="enter" onClick={toDataV}></div>
            </div>
            <BorderBox title="饲料使用情况" size="large" height="294" className="FeedUsageLine">
                <FeedUsageLine></FeedUsageLine>
            </BorderBox>
        </PageCenterStyle>
    )
}