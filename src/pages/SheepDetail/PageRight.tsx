import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import ProcessMontBodyAgeLine from "./charts/ProcessMontBodyAgeLine"
import { ProcessRecords } from "./charts/ProcessRecords"
import useEvent from "@/hooks/useEventHook"
import { useEffect, useState } from "react"
import SheepFeedLine from "./charts/SheepFeedLine"

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
            <BorderBox title="过程记录" height="505" className="GaugeBox">
                <ProcessRecords></ProcessRecords>
            </BorderBox>
            {
                isLamb ? 
                <BorderBox title="喂养曲线" height="350">
                    <SheepFeedLine></SheepFeedLine>
                </BorderBox> :
                <BorderBox title="月龄体态过程" height="350">
                    <ProcessMontBodyAgeLine></ProcessMontBodyAgeLine>
                </BorderBox>
            }
            
        </PageRightStyle>
    )
}