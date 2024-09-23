import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import MilkYieldLine from "./charts/MilkYieldLine"
import ProductRadar from "./charts/ProductRadar"
import { EnvInfo } from "./components/EnvInfo"
import { useEffect, useRef, useState } from "react"
import { getEnvironmentalDevice } from "@/api/DataV"
import useEvent from "@/hooks/useEventHook"


export const PageRight = () => {
    const [hovered, setHovered] = useState(false);
    const seletRef = useRef<any>(null)
    const seletOptionsRef = useRef<any>(null)
    const [roomList, setRoomList] = useState([])
    const [currentRoom, setCurrentRoom] = useState<any>({})
    const { subscribe } = useEvent()

    const hideSelect = (e: any) => {
        if (seletRef.current && !seletRef.current.contains(e.target) && seletOptionsRef.current && !seletOptionsRef.current.contains(e.target)) {
            setHovered(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', hideSelect)
        getEnvironmentalDevice().then((res: any) => {
            if (res.data) {
                setRoomList(res.data)
                setCurrentRoom(res?.data?.[0])
            }
        })

        subscribe('onDataVPointMouseEnter', (data: any) => {
            if (data.BarnName !== undefined && data.DeviceName !== undefined) {
                setCurrentRoom({
                    bldName: data.BarnName,
                    DeviceName: data.DeviceName,
                })
            }
        })

        return () => {
            document.removeEventListener('click', hideSelect)
        }
    }, [])

    const toolBar = () => {
        return (
            <div className="select" 
                onClick={() => {
                    setHovered(!hovered)
                }}
            >
                <div className={['selected', hovered ? 'isActive' : ''].join(' ')} ref={seletRef}>{currentRoom?.bldName}</div>
                {
                    hovered ?
                    <div className="selecte-options" ref={seletOptionsRef}>
                        {
                            roomList?.map((item: any) => <div onClick={() => {
                                setCurrentRoom(item)
                            }} key={item?.bldName}>{item?.bldName}</div>)
                        }
                    </div> : ''
                }
            </div>
        )
    }

    return (
       <PageRightStyle>
            <BorderBox title="环境监测" toolBar={toolBar()}>
                <EnvInfo deviceInfo={currentRoom}></EnvInfo>
            </BorderBox>
            <BorderBox title="产奶量">
                <MilkYieldLine></MilkYieldLine>
            </BorderBox>
            <BorderBox title="主要生产性能指标">
                <ProductRadar></ProductRadar>
            </BorderBox>
       </PageRightStyle>
    )
}