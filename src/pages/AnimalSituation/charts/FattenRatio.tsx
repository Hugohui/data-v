import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { ratioOptions } from "./FattenRatioOptions"
import { FC, useState } from 'react'
import { getHerdStructure } from '../../../api/IndexPage'
import { useIntervalRequest } from '../../../hooks/useIntervalRequest'

interface OptionsI {
}


const FattenRatio: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState()

    const formatData = (data: any) => {
        return data?.map((item: any) => {
            return {
                name: item.BarnTypeName,
                value: item.Column1
            }
        })
    }

    const getData = () => {
        getHerdStructure().then((res: any) => {
            if (res.code === 200) {
                setData(formatData(res.data))
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <>
            {(data) ? (
                <EChartsCommon
                    renderer={renderer}
                    option={ratioOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default FattenRatio