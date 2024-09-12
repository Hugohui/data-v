import { EnvInfoItemStyle } from "./EnvInfoItemStyle"
import CountUp from "react-countup"

interface EnvInfoItemI {
    value: string | number,
    label: string,
    icon: string,
    unit?: string
    decimals?: number
    status?: string
}

export const EnvInfoItem = (props: EnvInfoItemI) => {
    return (
        <EnvInfoItemStyle>
            <div className={`infoicon icon-${props.icon} ${props.status || 'default'}`}></div>
            <div className="main">
                <div className="value">
                    <CountUp className={`Num ${props.status || 'default'}`}
                        start={0} 
                        end={Number(props.value)} 
                        duration={2} 
                        separator=""
                        decimals={props.decimals || 0}
                    ></CountUp>
                    <span>{props.unit}</span>
                </div>
                <div className="balel">{props.label}</div>
            </div>
        </EnvInfoItemStyle>
    )
}