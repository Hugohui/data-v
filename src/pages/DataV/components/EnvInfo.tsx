import { getEnvironmentalMonitoring } from "@/api/DataV"
import { EnvInfoItem } from "./EnvInfoItem"
import { EnvInfoStyle } from "./EnvInfoStyle"
import { useState } from "react"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"

export const EnvInfo = () => {
    const [data, setData] = useState<any>({})

    const formatData = (data: any) => {
        const res: any = {}
        data?.forEach((item:any) => {
            res[item.pointName] = item.pointValue
        })
        return res
    }

    const getData = () => {
        getEnvironmentalMonitoring().then((res:any) => {
            if (res.data && res.data[0] && res.data[0].resultData) {
                setData(formatData(res.data[0].resultData))
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <EnvInfoStyle>
            <EnvInfoItem value={data['温度']} label="温度" icon="temperature" unit="°C"></EnvInfoItem>
            <EnvInfoItem value={data['湿度']} label="湿度" icon="humidness" unit="%"></EnvInfoItem>
            <EnvInfoItem value={data['水槽温度']} label="水槽温度" icon="tank-temperature" unit="°C"></EnvInfoItem>
            <EnvInfoItem value={data['二氧化碳']} label="二氧化碳" icon="co2" unit="%"></EnvInfoItem>
            <EnvInfoItem value={data['光照']} label="光照" icon="lux" unit="LUX"></EnvInfoItem>
            <EnvInfoItem value={data['水质']} label="水质" icon="water-ph" unit="PH"></EnvInfoItem>
        </EnvInfoStyle>
    )
}