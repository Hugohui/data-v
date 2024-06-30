import useEvent from "../../../hooks/useEventHook"
import { useEffect, useState } from "react"

export const SheepInfo = () => {
    const { subscribe } = useEvent()
    const [info, setInfo] = useState<any>({})

    useEffect(() => {
        subscribe('onSheepSelectEmit', (data: any) => {
            console.log("=====data", data)
            setInfo(data)
        })
    }, [])

    return (
        <div className="infoBox">
            <div className="info1">
                <p>编号: {info.a}</p>
                <p>月龄: {info.b}</p>
            </div>
            <div className="info2">
                <p>体高: {info.c}cm</p>
                <p>体重: {info.d}kg</p>
                <p>体长: 59cm</p>
            </div>
            <div className="info3">
                <p>胸深: 53cm</p>
                <p>胸宽: 36cm</p>
                <p>胸围: 29cm</p>
            </div>
            <div className="info4">
                <p>十字部高: 33cm</p>
                <p>管围: 30kg</p>
            </div>
        </div>
    )
}