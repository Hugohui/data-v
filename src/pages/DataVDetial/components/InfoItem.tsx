import { InfoItemStyle } from "./InfoItemStyle"
import CountUp from "react-countup"

interface InfoI {
    value: number | string
    label: string
    icon: string
}

export const InfoItem = (info: InfoI) => {
    return (
        <InfoItemStyle>
            <div className="value">
                <CountUp start={0} end={Number(info.value)} duration={1.5} separator=""></CountUp>
            </div>
            <div className="label">{info.label}</div>
            <div className={`infoicon icon-${info.icon}`}></div>
        </InfoItemStyle>
    )
}