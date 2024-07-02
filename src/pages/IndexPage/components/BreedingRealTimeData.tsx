import { InfoItem } from "./InfoItem"
import { useState } from "react"
import { getBreedingRealTimeData } from "../../../api/IndexPage"
import { useIntervalRequest } from "../../../hooks/useIntervalRequest"

export const BreedingRealTimeData = () => {
    const [data, setData] = useState<any>({})

    const getData = () => {
        getBreedingRealTimeData().then((res) => {
            if(res.code === 200) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <>
            <InfoItem label="昨日配种（只）" value={data.countBreedingYesterday}></InfoItem>
            <InfoItem label="昨日产羔（只）" value={data.countLambingYesterday}></InfoItem>
            <InfoItem label="昨日干奶（只）" value={data.countDriedMilkYesterday}></InfoItem>
            <InfoItem label="昨日断奶（只）" value={data.countWeanedInfoYesterday}></InfoItem>
            <InfoItem label="昨日妊检（只）" value={data.countPrenatalCheckupYesterday}></InfoItem>
            <InfoItem label="禁配羊只（只）" value={data.countContraindicatedYesterday}></InfoItem>
        </>
    )
}