import useEvent from "../../../hooks/useEventHook"
import { useEffect } from "react"

export const SheepInfo = () => {
    const { subscribe } = useEvent()

    useEffect(() => {
        subscribe('onSheepSelectEmit', (data: any) => {
            console.log("======onSheepSelectEmit======", data)
        })
    }, [])

    return (
        <div className="infoBox">
            <div className="info1">
                <p>编号: 0021</p>
                <p>月龄: 3</p>
            </div>
            <div className="info2">
                <p>体高: 90cm</p>
                <p>体重: 30kg</p>
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