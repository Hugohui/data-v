import { useEffect, useState } from "react"

import { InfoItem } from "./InfoItem"
import { getRealTimeData } from "../../../api/IndexPage"
import { useIntervalRequest } from "../../../hooks/useIntervalRequest"


export const RealTimeData = () => {

    const [data, setData] = useState<any>({})

    const getData = () => {
        getRealTimeData().then((res) => {
            if(res.code === 200) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <>
            <InfoItem label="总存栏数（只）" value={data.totalStock}></InfoItem>
            <InfoItem label="累计产奶（吨）" value={data.milkProductionALL}></InfoItem>
            <InfoItem label="泌乳羊只（只）" value={data.lactatingSheep}></InfoItem>
            <InfoItem label="累计出栏（只）" value={data.offSiteALL}></InfoItem>
            <InfoItem label="累计新增（只）" value={data.enteredALL}></InfoItem>
            <InfoItem label="累计怀孕（只）" value={data.pregnantALLSheep}></InfoItem>
        </>
    )
}