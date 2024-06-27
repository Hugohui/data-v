import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

import { PageCenterStyle, InfoBoxStyle } from "./style"
import centerPageData from "../../api/mock/centerPageData"
import { BorderBox } from "../../components/basic/BorderBox"


export const PageCenter = () => {
    const navigate = useNavigate()
    const [centerData, setCenterData] = useState<{mapData?: any}>({})

    const fetchMapData = async () => {
        // const res = await get(centerPageDataApi)
        // if (res.code === ResultEnum.SUCCESS) {
        //     setCenterData(res.data)
        // }
        setCenterData(centerPageData)
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
            <InfoBoxStyle>
                <div className="infoBox">
                    <div className="info1">
                        <p>编号: 0021</p>
                        <p>月龄: 3</p>
                    </div>
                    <div className="info2">
                        <p>体高: 90cm</p>
                        <p>体重: 30kg</p>
                        <p>体长: 59cm</p>
                    </div>
                    <div className="info3">
                        <p>胸深: 53cm</p>
                        <p>胸宽: 36cm</p>
                        <p>胸围: 29cm</p>
                    </div>
                    <div className="info4">
                        <p>十字部高: 33cm</p>
                        <p>管围: 30kg</p>
                    </div>
                </div>
            </InfoBoxStyle>
            <BorderBox title="各月龄身高体重散点图" height="428"></BorderBox>
        </PageCenterStyle>
    )
}