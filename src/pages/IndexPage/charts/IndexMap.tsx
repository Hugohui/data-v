import EChartsCommon from "@/components/EChartsCommon"
import useConfigStore from "@/store"
import { useRef, useState } from "react"
import { mapOptions } from "./IndexMapOptions"
import { EnterDialog } from "../components/EnterDialog"


export const IndexMap = () => {
    const renderer = useConfigStore((state) => state.renderer)
    // const renderer = "svg"

    const [data, setData] = useState<any>([])
    const [pointInPixel, setPointInPixel] = useState([950, 460])
    const showEnterRef = useRef(false)
    const [showEnterDialog, setShowEnterDialog] = useState(showEnterRef.current)
    

    const getData = () => {
    }

    // useIntervalRequest(getData)

    const mapOnClick = ({ pointInPixel }: any) => {
        console.log("====mapOnClick======", pointInPixel, showEnterRef.current)
        // setPointInPixel(pointInPixel)
        // showEnterRef.current = !showEnterRef.current
        // setShowEnterDialog(showEnterRef.current)
    }

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={mapOptions(data)}
                    onClick={mapOnClick}
                />
            ) : (
                ''
            )}

            {
                showEnterDialog ? <EnterDialog style={{left: pointInPixel[0], top: pointInPixel[1] - 290}}></EnterDialog> : ''
            }
        </>
    )
}