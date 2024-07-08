import EChartsCommon from "@/components/EChartsCommon"
import useConfigStore from "@/store"
import { useRef, useState } from "react"
import { mapOptions } from "./IndexMapOptions"
import { EnterDialog } from "../components/EnterDialog"
import { getListPastures } from "@/api/IndexPage"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"
import AMapComponent from "@/components/AMapComponent"


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
            <AMapComponent></AMapComponent>
        </>
    )
}