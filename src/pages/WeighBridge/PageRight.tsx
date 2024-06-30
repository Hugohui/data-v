import { PageRightStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"
import { ComeOutRecordTable } from "./charts/ComeOutRecordTable";
import CountUp from "react-countup";

export const PageRight = () => {
    return (
        <PageRightStyle>
            <BorderBox title="出入场记录" height="855" size="height" className="ComeOutRecordBox">
                <div className="ComeOutRecord">
                    <div className="Come">
                        <div>
                            <CountUp start={0} end={39} duration={2} className="Num"></CountUp>
                            <span>次</span>
                        </div>
                    </div>
                    <div className="Out">
                        <div>
                            <CountUp start={0} end={39} duration={2} className="Num"></CountUp>
                            <span>次</span>
                        </div>
                    </div>
                </div>
                <div className="ComeOutRecordTable">
                    <ComeOutRecordTable></ComeOutRecordTable>
                </div>
            </BorderBox>
        </PageRightStyle>
    )
}