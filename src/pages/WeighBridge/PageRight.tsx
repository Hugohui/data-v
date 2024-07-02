import { PageRightStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"
import { ComeOutRecordTable } from "./charts/ComeOutRecordTable";
import CountUp from "react-countup";
import { getWeighbridgeData } from "@/api/WeighBridge";
import { useState } from "react";
import { useIntervalRequest } from "@/hooks/useIntervalRequest";

export const PageRight = () => {

    const [data, setData] = useState<any>({})

    const getData = () => {
        getWeighbridgeData().then((res: any) => {
            if (res.result) {
                setData(res.result)
            }
        })
    }

    useIntervalRequest(getData)

    return (
        <PageRightStyle>
            <BorderBox title="出入场记录" height="855" size="height" className="ComeOutRecordBox">
                <div className="ComeOutRecord">
                    <div className="Come">
                        <div>
                            <CountUp start={0} end={data.InNumber} duration={2} className="Num"></CountUp>
                            <span>次</span>
                        </div>
                    </div>
                    <div className="Out">
                        <div>
                            <CountUp start={0} end={data.OutNumber} duration={2} className="Num"></CountUp>
                            <span>次</span>
                        </div>
                    </div>
                </div>
                <div className="ComeOutRecordTable">
                    <ComeOutRecordTable data={data.LoadometeTmp || []}></ComeOutRecordTable>
                </div>
            </BorderBox>
        </PageRightStyle>
    )
}