import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import { InfoItem } from "./components/InfoItem"

export const PageRight = () => {
    return (
        <PageRightStyle>
            <BorderBox title="繁育实时数据" height="294">
                <InfoItem label="昨日配种（只）" value={2000}></InfoItem>
                <InfoItem label="昨日产羔（只）" value={300}></InfoItem>
                <InfoItem label="昨日干奶（只）" value={20}></InfoItem>
                <InfoItem label="昨日断奶（只）" value={1003}></InfoItem>
                <InfoItem label="昨日妊检（只）" value={399}></InfoItem>
                <InfoItem label="禁配羊只（只）" value={402}></InfoItem>
            </BorderBox>
            <BorderBox title="羊群类型占比" height="294"></BorderBox>
            <BorderBox title="产奶变化趋势" height="294"></BorderBox>
        </PageRightStyle>
    )
}