import { useNavigate } from "react-router-dom"
import { AnchorPointStyle } from "./AnchorPointStyle"

export const AnchorPoint = () => {
    const navigate = useNavigate()

    const onPointClick = (index: number) => {
        navigate(`/dataVDetail?id=${index}`)
    }
    return (
        <AnchorPointStyle>
            {
                (new Array(28).fill(0)).map((_, index) => <div key={index} onClick={() => onPointClick(index)}></div>)
            }
        </AnchorPointStyle>
    )
}