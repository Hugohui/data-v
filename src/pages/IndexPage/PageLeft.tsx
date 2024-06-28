import { useState } from "react"

import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import { InfoItem } from "./components/InfoItem"
import KeepRatio from "./charts/KeepRatio"
import SheepTendencyBar from "./charts/SheepTendencyBar"


const testKeepData = [
    { value: 1048, name: '牧场一' },
    { value: 735, name: '牧场二' },
]

const testSheepTendency = [120, 200, 150, 80, 70, 110, 130, 23, 45, 67, 89, 67]

export const PageLeft = () => {

    const [keepRatioData, setKeepRatioData] = useState(testKeepData)
    const [sheepTendencyData, setSheepTendency] = useState(testSheepTendency)

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
            <BorderBox title="各牧场存栏占比" height="294">
                <KeepRatio data={keepRatioData}></KeepRatio>
            </BorderBox>
            <BorderBox title="羊群变化趋势" height="294">
                <SheepTendencyBar data={sheepTendencyData}></SheepTendencyBar>
            </BorderBox>
        </PageLeftStyle>
    )
}