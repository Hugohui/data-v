import { useEffect, useState } from "react"

import useInterval from "../../../hooks/useInterval"
import { InfoItem } from "./InfoItem"
import { getRealTimeData } from "../../../api/IndexPage"


export const RealTimeData = () => {

    const [data, setData] = useState<any>({})

    const getData = () => {
        getRealTimeData().then((res) => {
            if(res.code === 200) {
                setData(res.data)
            }
        })
    }

    useInterval(getData)

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <InfoItem label="总存栏数（只）" value={data.totalStock}></InfoItem>
            <InfoItem label="昨日产奶（kg）" value={data.milkProductionYesterday}></InfoItem>
            <InfoItem label="泌乳羊只（只）" value={data.lactatingSheep}></InfoItem>
            <InfoItem label="昨日出栏（只）" value={data.offSiteYesterday}></InfoItem>
            <InfoItem label="昨日新增（只）" value={data.enteredYesterday}></InfoItem>
            <InfoItem label="怀孕羊只（只）" value={data.pregnantSheep}></InfoItem>
        </>
    )
}