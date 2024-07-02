import { useState } from 'react'

import { getPercentageSheepWeight } from '@/api/Weigh'
import WeighSection from './WeighSection'
import { useIntervalRequest } from '@/hooks/useIntervalRequest'


export const WeighSectionBox = () => {
    const [data, setData] = useState<any>({})

    const getData = () => {
        getPercentageSheepWeight().then((res: any) => {
            if (res.code === 200 && res.data) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <>
            <div className="GaugeBoxItem">
                <WeighSection title={data[0]?.name} value={data[0]?.value} formatter="{value}%"></WeighSection>
            </div>
            <div className="GaugeBoxItem">
                <WeighSection title={data[1]?.name} value={data[1]?.value} formatter="{value}%" backgroundColor={['#1F5068', '#5595EC', '#2BE6D0']}></WeighSection>
            </div>
            <div className="GaugeBoxItem">
                <WeighSection title={data[2]?.name} value={data[2]?.value} formatter="{value}%" backgroundColor={["#543C1B", "#B8E638", "#F29322"]}></WeighSection>
            </div>
        </>
    )
}