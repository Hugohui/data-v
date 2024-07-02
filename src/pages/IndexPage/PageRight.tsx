import { useState } from "react"
import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import SheepType from "./charts/SheepType"
import MilkTendencyBar from "./charts/MilkTendencyBar"
import { BreedingRealTimeData } from "./components/BreedingRealTimeData"


export const PageRight = () => {
    return (
        <PageRightStyle>
            <BorderBox title="繁育实时数据" height="294">
                <BreedingRealTimeData></BreedingRealTimeData>
            </BorderBox>
            <BorderBox title="羊群类型占比" height="294">
                <SheepType></SheepType>
            </BorderBox>
            <BorderBox title="产奶变化趋势" height="294">
                <MilkTendencyBar></MilkTendencyBar>
            </BorderBox>
        </PageRightStyle>
    )
}