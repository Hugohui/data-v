import { InfoItemStyle, InfoItemNumStyle, InfoItemTexttyle } from "./InfoItemStyle"
import CountUp from "react-countup"

interface InfoItemI {
    value: string | number
    label: string
}

export const InfoItem = (item: InfoItemI) => {
    return (
        <InfoItemStyle>
            <InfoItemNumStyle>
                <CountUp start={0} end={Number(item.value)} duration={2} separator=""></CountUp>
                {/* {item.value} */}
            </InfoItemNumStyle>
            <InfoItemTexttyle>{item.label}</InfoItemTexttyle>
        </InfoItemStyle>
    )
}