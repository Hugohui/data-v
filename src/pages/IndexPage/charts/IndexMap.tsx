import EChartsCommon from "@/components/EChartsCommon"
import useConfigStore from "@/store"
import { useRef, useState } from "react"
import { mapOptions } from "./IndexMapOptions"
import { EnterDialog } from "../components/EnterDialog"
import { getListPastures } from "@/api/IndexPage"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"


export const IndexMap = () => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>([])
    const [pointInPixel, setPointInPixel] = useState([950, 460])
    const [showEnterDialog, setShowEnterDialog] = useState(false)

    const formatData = (data: any = []) => {
        return data?.map((item: any) => ({
            name: item.PastureName,
            coord: [item.Longitude, item.Latitude],
            data: item
        }))
    }
    

    const getData = () => {
        getListPastures().then((res: any) => {
            if (res.data) {
                setData(formatData(res.data))
            }
        })
    }

    useIntervalRequest(getData)

    const mapOnClick = ({ pointInPixel }: any) => {
        setPointInPixel(pointInPixel)
    }

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={mapOptions(data)}
                    onClick={mapOnClick}
                    // onSelect={() => setShowEnterDialog(true)}
                    onUnSelect={() => setShowEnterDialog(false)}
                    onDrag={() => setShowEnterDialog(false)}
                    onZoom={() => setShowEnterDialog(false)}
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