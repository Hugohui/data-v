import { useState } from "react"
import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import SheepType from "./charts/SheepType"
import MilkTendencyBar from "./charts/MilkTendencyBar"
import { BreedingRealTimeData } from "./components/BreedingRealTimeData"

const testSheepTendency = [120, 200, 150, 80, 70, 110, 130, 23, 45, 67, 89, 67]

export const PageRight = () => {
    const [milkTendencyData, setMilkTendencyData] = useState(testSheepTendency)
    
    return (
        <PageRightStyle>
            <BorderBox title="繁育实时数据" height="294">
                <BreedingRealTimeData></BreedingRealTimeData>
            </BorderBox>
            <BorderBox title="羊群类型占比" height="294">
                <SheepType></SheepType>
            </BorderBox>
            <BorderBox title="产奶变化趋势" height="294">
                <MilkTendencyBar data={milkTendencyData}></MilkTendencyBar>
            </BorderBox>
        </PageRightStyle>
    )
}