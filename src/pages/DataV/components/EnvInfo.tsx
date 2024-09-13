import { getEnvironmentalMonitoring } from "@/api/DataV"
import { EnvInfoItem } from "./EnvInfoItem"
import { EnvInfoStyle } from "./EnvInfoStyle"
import { useEffect, useState } from "react"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"

export const EnvInfo = ({ deviceInfo }: any) => {
    const [data, setData] = useState<any>({})

    const formatData = (data: any) => {
        const res: any = {}
        data?.forEach((item:any) => {
            res[item.name] = {
                value: item.value,
                status: item.status
                // status: 'warning'
            }
        })
        return res
    }

    const getData = () => {
        if (!deviceInfo?.DeviceName) return;
        getEnvironmentalMonitoring({
            DeviceName: deviceInfo?.DeviceName
        }).then((res:any) => {
            if (res.data) {
                setData(formatData(res.data))
            }
        })
    }

    useEffect(() => {
        getData()
    }, [deviceInfo?.bldName])

    useIntervalRequest(getData)

    return (
        <EnvInfoStyle>
            <EnvInfoItem value={data?.['温度']?.value} status={data?.['温度']?.status} decimals={1} label="温度" icon="temperature" unit="°C"></EnvInfoItem>
            <EnvInfoItem value={data?.['湿度']?.value} status={data?.['湿度']?.status} label="湿度" icon="humidness" unit="%"></EnvInfoItem>
            <EnvInfoItem value={data?.['水槽温度']?.value} status={data?.['水槽温度']?.status} label="水槽温度" icon="tank-temperature" unit="°C"></EnvInfoItem>
            <EnvInfoItem value={data?.['二氧化碳']?.value} status={data?.['二氧化碳']?.status} label="二氧化碳" icon="co2" unit="%"></EnvInfoItem>
            <EnvInfoItem value={data?.['光照']?.value} status={data?.['光照']?.status} label="光照" icon="lux" unit="LUX"></EnvInfoItem>
            <EnvInfoItem value={data?.['氨气']?.value} status={data?.['氨气']?.status} label="氨气" icon="nh3-ppm" unit="PPM"></EnvInfoItem>
        </EnvInfoStyle>
    )
}