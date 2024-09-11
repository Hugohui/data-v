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
            <InfoItem label="配种（只）" value={data.countBreedingALL}></InfoItem>
            <InfoItem label="产羔（只）" value={data.countLambingALL}></InfoItem>
            {/* <InfoItem label="干奶（只）" value={data.countDriedMilkYesterday}></InfoItem> */}
            <InfoItem label="断奶（只）" value={data.countWeanedInfoALL}></InfoItem>
            <InfoItem label="妊检（只）" value={data.countPrenatalALL}></InfoItem>
            <InfoItem label="禁配羊只（只）" value={data.countContraindicatedALL}></InfoItem>
        </>
    )
}