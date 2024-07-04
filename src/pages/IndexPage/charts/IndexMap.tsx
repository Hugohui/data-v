import EChartsCommon from "@/components/EChartsCommon"
import useConfigStore from "@/store"
import { useState } from "react"
import { mapOptions } from "./IndexMapOptions"


export const IndexMap = () => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>([])

    const getData = () => {
    }

    // useIntervalRequest(getData)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={mapOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}