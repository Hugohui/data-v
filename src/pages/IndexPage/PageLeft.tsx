import { useState } from "react"

import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import KeepRatio from "./charts/KeepRatio"
import SheepTendencyBar from "./charts/SheepTendencyBar"
import { RealTimeData } from "./components/RealTimeData"


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
                <RealTimeData></RealTimeData>
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