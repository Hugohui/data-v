import { useNavigate } from "react-router-dom"
import { AnchorPointStyle } from "./AnchorPointStyle"
import { points } from './points'

export const AnchorPoint = () => {
    const navigate = useNavigate()

    const onPointClick = (item: any) => {
        // console.log("====onPointClick==", item)
        navigate(`/dataVDetail?id=${item.id}`)
    }

    return (
        <AnchorPointStyle>
            {
                points.map((item) => <div key={item.name} onClick={() => onPointClick(item)}></div>)
            }
        </AnchorPointStyle>
    )
}