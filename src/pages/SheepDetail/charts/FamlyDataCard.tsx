import { useEffect, useState } from "react"

import useEvent from "../../../hooks/useEventHook"
import { FamlyDataCardStyle } from "./FamlyDataCardStyle"

export const FamlyDataCard = () => {
    const { subscribe } = useEvent()
    const [info, setInfo] = useState<any>({})
    const [famlyData, setFamlyData] = useState<any>({})
 
    useEffect(() => {
        subscribe('onSheepDetailSelectEmit', (data: any) => {
            if (data) {
                setInfo(data)
                setFamlyData(data?.famlyData || {})
            }
        })
    }, [])

    return (
        <FamlyDataCardStyle>
            <div>
                <div className="card self">
                    <div className="num">{info?.CowCode}</div>
                    <div className="name">羊</div>
                </div>
                <div className="line"></div>
            </div>
            <div>
                <div>
                    <div className="card father">
                        <div className="num">{famlyData?.Father}</div>
                        <div className="name">父亲</div>
                    </div>
                    <div className="line fatherLine">
                        <div className="card gradFather">
                            <div className="num">{famlyData?.FatherF}</div>
                            <div className="name">祖父</div>
                        </div>
                        <div className="card gradFather">
                            <div className="num">{famlyData?.FatherM}</div>
                            <div className="name">祖母</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card father">
                        <div className="num">{famlyData?.Mother}</div>
                        <div className="name">母亲</div>
                    </div>
                    <div className="line fatherLine">
                        <div className="card gradFather">
                            <div className="num">{famlyData?.MotherF}</div>
                            <div className="name">外祖父</div>
                        </div>
                        <div className="card gradFather">
                            <div className="num">{famlyData?.MotherM}</div>
                            <div className="name">外祖母</div>
                        </div>
                    </div>
                </div>
            </div>
        </FamlyDataCardStyle>
    )
}
