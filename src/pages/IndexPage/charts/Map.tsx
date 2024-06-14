import { FC } from "react"
import EChartsCommon from "../../../components/EChartsCommon"
import { mapOptions } from './options'
import useConfigStore from '../../../store/index'

const Map: FC<{mapData: any}> = ({ mapData }) => {
    const renderer = useConfigStore((state) => state.renderer)

    return (
        <>
            {(mapData) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={mapOptions(mapData)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default Map
