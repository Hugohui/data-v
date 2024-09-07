import { useNavigate } from "react-router-dom"
import { AnchorPointStyle } from "./AnchorPointStyle"
import { points } from './points'
import { getListBarns } from "@/api/DataV"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"
import { useState } from "react"

export const AnchorPoint = () => {
    const navigate = useNavigate()

    const [data, setData] = useState<any>({})

    const onPointClick = (item: any) => {
        data[item.name] && navigate(`/sheepDetail?id=${data[item.name]}`)
    }

    const formatFarmMap = (data: any) => {
        const farmMap: any = {}
        data?.forEach((item: any) => farmMap[item.BarnName] = item.BarnCode)
        return farmMap
    }

    const getData = () => {
        getListBarns().then((res: any) => {
            if (res.data) {
                setData(formatFarmMap(res.data))
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <AnchorPointStyle>
            {
                points.map((item) => <div key={item.name} onClick={() => onPointClick(item)}></div>)
            }
        </AnchorPointStyle>
    )
}