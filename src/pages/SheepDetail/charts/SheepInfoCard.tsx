import useEvent from "../../../hooks/useEventHook"
import { useEffect, useState } from "react"
import { CardLeftStyle, CardRightStyle, SheepInfoCardStyle } from "./SheepInfoCardStyle"


export const SheepInfoCard = () => {
    const { subscribe } = useEvent()
    const [info, setInfo] = useState<any>({})
    const [isLamb, setIsLamb] = useState(false)

    useEffect(() => {
        subscribe('onSheepDetailSelectEmit', (data: any) => {
            if (data) {
                setInfo(data)
            }
        })
        subscribe('onSheepStateChange', (status: string = '') => {
            setIsLamb(status.includes('羔羊'))
        })
    }, [])

    return (
        <SheepInfoCardStyle>
            <CardLeftStyle>
                <p>羊只编号：{info?.CowCode}</p>
                <p>耳标号：{info?.EarTagCode}</p>
                <p>品种：{info?.BreedName}</p>
                <p>胎次：{info?.CurrentChildTime}</p>
                <p>性别：{info?.CowSex}</p>
                <p>出生日期：{info?.BirthDate}</p>
                {
                    isLamb && info?.HealthCoeffi !== undefined ? 
                    <p>
                        健康系数：<span className={[`${info?.HealthCoeffi <= 2 ? 'healthy' : info?.HealthCoeffi <= 4 ? 'warning' : 'danger'}`].join(" ")}>{info?.HealthCoeffi}</span>
                    </p> : ''
                }
                
            </CardLeftStyle>
            <CardRightStyle>
                {
                    info?.ImagePath ? <img src={info?.ImagePath} alt="" /> : ''
                }
                
            </CardRightStyle>
        </SheepInfoCardStyle>
    )
}