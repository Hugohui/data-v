import { useEffect, useRef, useState } from "react"
import { getListPastures } from "@/api/IndexPage"
import AMapComponent from "@/components/AMapComponent"


export const IndexMap = () => {
    const [data, setData] = useState<any>([])

    const formatData = (data: any = []) => {
        return data?.map((item: any) => ({
            name: item.PastureName,
            coord: [item.Longitude, item.Latitude],
            origin: item
        }))
    }

    const getData = () => {
        getListPastures().then((res: any) => {
            if (res.data) {
                setData(formatData(res.data))
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <AMapComponent data={data}></AMapComponent>
        </>
    )
}