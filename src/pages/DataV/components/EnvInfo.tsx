import { EnvInfoItem } from "./EnvInfoItem"
import { EnvInfoStyle } from "./EnvInfoStyle"

export const EnvInfo = () => {
    return (
        <EnvInfoStyle>
            <EnvInfoItem value="28" label="温度" icon="temperature" unit="°C"></EnvInfoItem>
            <EnvInfoItem value="46" label="湿度" icon="humidness" unit="%"></EnvInfoItem>
            <EnvInfoItem value="24" label="水槽温度" icon="tank-temperature" unit="°C"></EnvInfoItem>
            <EnvInfoItem value="21" label="二氧化碳" icon="co2" unit="%"></EnvInfoItem>
            <EnvInfoItem value="13" label="光照" icon="lux" unit="LUX"></EnvInfoItem>
            <EnvInfoItem value="14" label="水质" icon="water-ph" unit="PH"></EnvInfoItem>
        </EnvInfoStyle>
    )
}