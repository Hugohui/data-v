import { useState } from "react"
import BreedingRate from "./BreedingRate"
import { getBreedingRate } from "../../../api/AnimalSituation"
import { useIntervalRequest } from "../../../hooks/useIntervalRequest"

export const BreedingRateBox = () => {
    const [data, setData] = useState<any>({})

    const getData = () => {
        getBreedingRate().then((res: any) => {
            if (res.code === 200 ) {
                setData(res.data)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <>
            <div className="DungClear">
                <BreedingRate title="羔羊成活率" value={data.LambSurvivalRate || 0} unit="%"></BreedingRate>
            </div>
            <div className="DungClear">
                <BreedingRate title="胎间隔" value={data.FetalSeptum || 0} unit="天" backgroundColor={['#1F5068', '#5595EC', '#2BE6D0']}></BreedingRate>
            </div>
            <div className="DungClear">
                <BreedingRate title="受胎率" value={data.pregnancyRate || 0} unit="%" backgroundColor={["#543C1B", "#B8E638", "#F29322"]}></BreedingRate>
            </div>
        </>
    )
}