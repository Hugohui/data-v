import { useNavigate } from "react-router-dom"
import { EnterDialogStyle } from "./EnterDialogStyle"
import { FC } from "react"

interface StyleI {
    top?: number
    left?: number
}

interface PropsI {
    style?: StyleI
}

export const EnterDialog: FC<PropsI> = ({ style }) => {
    const navigate = useNavigate()

    const toDataV = () => {
        navigate('/dataV')
    }

    return (
        <EnterDialogStyle $top={style?.top} $left={style?.left}>
            <div className="enterDialog">
                {/* <div className="name">陕西省</div> */}
                <div className="info">
                    <div><span>牧场名称</span>：产投集团</div>
                    <div><span>存栏数</span>：5000只</div>
                    <div><span>地址</span>：陕西省宝鸡市</div>
                </div>
                <div className="enter" onClick={toDataV}></div>
            </div>
        </EnterDialogStyle>
    )
}