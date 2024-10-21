import { useNavigate } from "react-router-dom"
import { AnchorPointStyle } from "./AnchorPointStyle"
import { points } from './points'
import { getListBarns } from "@/api/DataV"
import { useIntervalRequest } from "@/hooks/useIntervalRequest"
import { useState } from "react"
import { setSheepRoomInfo } from "@/utils/session"
import VideoPlayer from "@/components/VideoPlayer"
import useEvent from "@/hooks/useEventHook"

export const AnchorPoint = () => {
    const navigate = useNavigate()
    const { publish } = useEvent()
    // const [hovered, setHovered] = useState(false);
    const [pointsData, setPointsData] = useState<any>(points)
 
    const handleMouseEnter = (item: any, index: any) => {
        if (data[item.name]) {
            pointsData[index].hovered = true
            setPointsData([...pointsData])
            publish('onDataVPointMouseEnter', data?.[pointsData?.[index]?.name])
        }
    };
    
    const handleMouseLeave = (item: any, index: any) => {
        if (data[item.name]) { 
            pointsData[index].hovered = false
            setPointsData([...pointsData])
        }
    };


    const [data, setData] = useState<any>({})

    const onPointClick = (item: any) => {
        data[item.name] && navigate(`/sheepDetail?id=${data[item.name].BarnCode}`)
        setSheepRoomInfo(item)
    }

    const formatFarmMap = (data: any) => {
        const farmMap: any = {}
        data?.forEach((item: any) => {
            farmMap[item.BarnName] = item

            const errorItem = item?.DeviceList?.find((i: any) => i.status === 'error');
            if (errorItem) {
                item.status = 'error'
                return
            };
            const warningItem = item?.DeviceList?.find((i: any) => i.status === 'warning');
            if (warningItem) {
                item.status = 'warning'
            };
        })
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
        <AnchorPointStyle className="AnchorPointStyle">
            {
                pointsData.map((item: any, index: number) => <div 
                className={[data?.[item.name]?.status].join(' ')}
                key={item.name} onMouseEnter={() => {
                    handleMouseEnter(item, index)
                }} onMouseLeave={() => {
                    handleMouseLeave(item, index)
                }}>
                    {item.hovered && (
                        <div className="videoHover">
                            <VideoPlayer src={data?.[item.name]?.videlLst?.VideoLink}></VideoPlayer>
                            <span onClick={() => onPointClick(item)}>家系图</span>
                        </div>
                    )}
                </div>)
            }
        </AnchorPointStyle>
    )
}