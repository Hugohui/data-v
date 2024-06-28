import { useState } from "react"
import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import { InfoItem } from "./components/InfoItem"
import SheepType from "./charts/SheepType"
import MilkTendencyBar from "./charts/MilkTendencyBar"

const testData = [
    { value: 1048, name: '公羊' },
    { value: 44, name: '泌乳羊' },
    { value: 735, name: '育肥羊' },
    { value: 432, name: '繁殖母羊' },
    { value: 123, name: '羔羊' },
]

const testSheepTendency = [120, 200, 150, 80, 70, 110, 130, 23, 45, 67, 89, 67]

export const PageRight = () => {
    const [sheepTypeData, setSheepTypeData] = useState(testData)
    const [milkTendencyData, setMilkTendencyData] = useState(testSheepTendency)
    
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
            <BorderBox title="羊群类型占比" height="294">
                <SheepType data={sheepTypeData}></SheepType>
            </BorderBox>
            <BorderBox title="产奶变化趋势" height="294">
                <MilkTendencyBar data={milkTendencyData}></MilkTendencyBar>
            </BorderBox>
        </PageRightStyle>
    )
}