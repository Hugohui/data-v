import { InfoItemStyle } from "./InfoItemStyle"

interface InfoI {
    value: number | string
    label: string
    icon: string
}

export const InfoItem = (info: InfoI) => {
    return (
        <InfoItemStyle>
            <div className="value">{info.value}</div>
            <div className="label">{info.label}</div>
            <div className={`infoicon icon-${info.icon}`}></div>
        </InfoItemStyle>
    )
}