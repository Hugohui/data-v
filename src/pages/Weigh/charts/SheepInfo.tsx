import useEvent from "../../../hooks/useEventHook"
import { useEffect, useState } from "react"

export const SheepInfo = () => {
    const { subscribe } = useEvent()
    const [info, setInfo] = useState<any>({})

    useEffect(() => {
        subscribe('onSheepSelectEmit', (data: any) => {
            if (data) {
                setInfo(data)
            }
        })
    }, [])

    return (
        <div className="infoBox">
            <div className="info1">
                <p>编号: {info.CowCode}</p>
                <p>月龄: {info.monAge}</p>
            </div>
            <div className="info2">
                <p>体高: {info.Height != null && info.Height ? `${info.Height}cm` : '--'}</p>
                <p>体重: {info.Weight != null && info.Weight? `${info.Weight}kg` : '--'}</p>
                <p>体长: {info.length_straight != null && info.length_straight ? `${info.length_straight}cm` : '--'}</p>
            </div>
            <div className="info3">
                <p>胸深: {info.chestDepth != null && info.chestDepth  ? `${info.chestDepth}cm` : '--' }</p>
                <p>胸宽: {info.chestBreadth != null && info.chestBreadth ? `${info.chestBreadth}cm` : '--'}</p>
                <p>胸围: {info.circum_chest != null && info.circum_chest ? `${info.circum_chest}cm` : '--'}</p>
            </div>
            <div className="info4">
                <p>十字部高: {info.width_waist != null && info.width_waist ? `${info.width_waist}cm` : '--'}</p>
                <p>管围: {info.circumference != null && info.circumference ? `${info.circumference}cm` : '--'}</p>
            </div>
        </div>
    )
}