import { EnvInfoItemStyle } from "./EnvInfoItemStyle"

interface EnvInfoItemI {
    value: string,
    label: string,
    icon: string,
    unit?: string
}

export const EnvInfoItem = (props: EnvInfoItemI) => {
    return (
        <EnvInfoItemStyle>
            <div className={`infoicon icon-${props.icon}`}></div>
            <div className="main">
                <div className="value">
                    {props.value} <span>{props.unit}</span>
                </div>
                <div className="balel">{props.label}</div>
            </div>
        </EnvInfoItemStyle>
    )
}