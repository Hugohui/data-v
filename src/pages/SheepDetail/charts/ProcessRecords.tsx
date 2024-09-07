import { useEffect, useState } from "react"

import useEvent from "../../../hooks/useEventHook"
import { ProcessRecordsStyle } from "./ProcessRecordsStyle"


export const ProcessRecords = () => {
    const { subscribe } = useEvent()
    const [records, setRecords] = useState<any>([])

    useEffect(() => {
        subscribe('onSheepDetailSelectEmit', (data: any) => {
            if (data) {
                setRecords(data?.processRecords)
            }
        })
    }, [])

    return (
        <ProcessRecordsStyle>
            {
                records.length ? <div className="timeline">
                    {
                        records?.map((item: any, index: number) => (
                            <div key={index} className="timeline-item">
                                <div className={['timeline-content', index % 2 === 0 ? 'foatLeft' : 'foatRight'].join(" ")}>
                                    <p>{item?.value?.substr(0, 9)}</p>
                                    <p>{item?.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div> : ''
            }

        </ProcessRecordsStyle>
    )
}