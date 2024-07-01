import { InfoItem } from "./InfoItem"

export const BreedingRealTimeData = () => {
    return (
        <>
            <InfoItem label="昨日配种（只）" value={2000}></InfoItem>
            <InfoItem label="昨日产羔（只）" value={300}></InfoItem>
            <InfoItem label="昨日干奶（只）" value={20}></InfoItem>
            <InfoItem label="昨日断奶（只）" value={1003}></InfoItem>
            <InfoItem label="昨日妊检（只）" value={399}></InfoItem>
            <InfoItem label="禁配羊只（只）" value={402}></InfoItem>
        </>
    )
}