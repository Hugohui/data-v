import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import ProcessMontBodyAgeLine from "./charts/ProcessMontBodyAgeLine"
import { ProcessRecords } from "./charts/ProcessRecords"
import useEvent from "@/hooks/useEventHook"
import { useEffect, useState } from "react"
import SheepFeedLine from "./charts/SheepFeedLine"
import { RealTimeVideo } from "./charts/RealTimeVideo"

export const PageRight = () => {
    const { subscribe } = useEvent();
    const [isLamb, setIsLamb] = useState(false);

    useEffect(() => {
        subscribe('onSheepStateChange', (status: string = '') => {
            setIsLamb(status.includes('羔羊'))
        })
    }, [])

    return (
        <PageRightStyle>
            <BorderBox title="生长档案" height="505" className="GaugeBox">
                <ProcessRecords></ProcessRecords>
            </BorderBox>
            {
                isLamb ? 
                <BorderBox title="饲喂曲线" height="350">
                    <SheepFeedLine></SheepFeedLine>
                </BorderBox> :
                // <BorderBox title="月龄体态过程" height="350">
                //     <ProcessMontBodyAgeLine></ProcessMontBodyAgeLine>
                // </BorderBox>
                 <BorderBox title="实时视频" height="350">
                    <RealTimeVideo></RealTimeVideo>
                </BorderBox>
            }
            
        </PageRightStyle>
    )
}