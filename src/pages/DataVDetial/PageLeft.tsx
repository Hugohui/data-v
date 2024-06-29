import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import TemperatureHumidityLine from "./charts/TemperatureHumidityLine"
import TankTemperatureLine from "./charts/TankTemperatureLine"
import AmmoniaGasLine from "./charts/AmmoniaGasLine"

export const PageLeft = () => {
    return (
        <PageLeftStyle>
            <BorderBox title="温湿度">
                <TemperatureHumidityLine></TemperatureHumidityLine>
            </BorderBox>
            <BorderBox title="水槽温度">
                <TankTemperatureLine></TankTemperatureLine>
            </BorderBox>
            <BorderBox title="氨气">
                <AmmoniaGasLine></AmmoniaGasLine>
            </BorderBox>
        </PageLeftStyle>
    )
}