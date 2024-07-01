import { InfoItem } from "./InfoItem"

export const RealTimeData = () => {
    return (
        <>
            <InfoItem label="总存栏数（只）" value={1200}></InfoItem>
            <InfoItem label="昨日产奶（kg）" value={200}></InfoItem>
            <InfoItem label="泌乳羊只（只）" value={2400}></InfoItem>
            <InfoItem label="昨日出栏（只）" value={456}></InfoItem>
            <InfoItem label="昨日新增（只）" value={300}></InfoItem>
            <InfoItem label="怀孕羊只（只）" value={299}></InfoItem>
        </>
    )
}