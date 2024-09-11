import { PageLeftStyle } from "./style"
import { BorderBox } from "@/components/basic/BorderBox"
import KeepRatio from "./charts/KeepRatio"
import SheepTendencyBar from "./charts/SheepTendencyBar"
import { RealTimeData } from "@/pages/IndexPage/components/RealTimeData"

export const PageLeft = () => {
    return (
        <PageLeftStyle>
            <BorderBox title="实时数据" height="294" className="InfoItem">
                <RealTimeData></RealTimeData>
            </BorderBox>
            <BorderBox title="各牧场存栏占比" height="294" className="KeepRatio">
                <KeepRatio></KeepRatio>
            </BorderBox>
            <BorderBox title="羊群存栏变化趋势" height="294">
                <SheepTendencyBar></SheepTendencyBar>
            </BorderBox>
        </PageLeftStyle>
    )
}