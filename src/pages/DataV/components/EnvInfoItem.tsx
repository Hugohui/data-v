import { EnvInfoItemStyle } from "./EnvInfoItemStyle"
import CountUp from "react-countup"

interface EnvInfoItemI {
    value: string | number,
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
                    <CountUp className="Num" start={0} end={Number(props.value)} duration={2} separator=""></CountUp>
                    <span>{props.unit}</span>
                </div>
                <div className="balel">{props.label}</div>
            </div>
        </EnvInfoItemStyle>
    )
}