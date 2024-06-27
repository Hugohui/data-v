import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import { InfoItem } from "./components/InfoItem"

export const PageLeft = () => {
    return (
        <PageLeftStyle>
            <BorderBox title="实时数据" height="294" className="InfoItem">
                <InfoItem label="总存栏数（只）" value={1200}></InfoItem>
                <InfoItem label="昨日产奶（kg）" value={200}></InfoItem>
                <InfoItem label="泌乳羊只（只）" value={2400}></InfoItem>
                <InfoItem label="昨日出栏（只）" value={456}></InfoItem>
                <InfoItem label="昨日新增（只）" value={300}></InfoItem>
                <InfoItem label="怀孕羊只（只）" value={299}></InfoItem>
            </BorderBox>
            <BorderBox title="各牧场存栏占比" height="294"></BorderBox>
            <BorderBox title="羊群变化趋势" height="294"></BorderBox>
        </PageLeftStyle>
    )
}