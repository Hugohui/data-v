import useConfigStore from '../../../store/index'
import EChartsCommon from "../../../components/EChartsCommon"
import { keepRatioOptions } from "./KeepRatioOptions"
import { FC, useState } from 'react'
import { getSheepHerdsRatio } from '@/api/IndexPage'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'

interface KeepRatioInfoI {
    name: string,
    value: number
}

interface OptionsI {}

const KeepRatio: FC<OptionsI> = (options) => {
    const renderer = useConfigStore((state) => state.renderer)

    const [data, setData] = useState<any>([])

    const formatData = (data: any) => {
        return data?.map((item:any) => {
            return {
                name: item.PastureName,
                value: item.PastureBreedingStock
            }
        })
    }

    const getData = () => {
        getSheepHerdsRatio().then((res: any) => {
            if (res.code === 200 && res.data) {
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
                    option={keepRatioOptions(data)}
                />
            ) : (
                ''
            )}
        </>
    )
}

export default KeepRatio