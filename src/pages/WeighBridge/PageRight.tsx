import { PageRightStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"
import { ComeOutRecordTable } from "./charts/ComeOutRecordTable";

export const PageRight = () => {
    return (
        <PageRightStyle>
            <BorderBox title="出入场记录" height="855" size="height" className="ComeOutRecordBox">
                <div className="ComeOutRecord">
                    <div className="Come">
                        <div>39<span>次</span></div>
                    </div>
                    <div className="Out">
                        <div>39<span>次</span></div>
                    </div>
                </div>
                <div className="ComeOutRecordTable">
                    <ComeOutRecordTable></ComeOutRecordTable>
                </div>
            </BorderBox>
        </PageRightStyle>
    )
}