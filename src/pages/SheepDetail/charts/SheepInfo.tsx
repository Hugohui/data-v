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
        </div>
    )
}