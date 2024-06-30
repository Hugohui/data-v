import { PageTopStyle } from "./style";
import CountUp from "react-countup";

export const PageTop = () => {
    return (
        <PageTopStyle>
            <div className="InfoItem">
                昨日上厅羊
                <div className="Num">
                    <CountUp start={0} end={5000} duration={1.5} separator=""></CountUp>
                </div>
                <div className="Unit">只</div>
            </div>
            <div className="InfoItem">
                昨日总产奶量
                <div className="Num">
                    <CountUp start={0} end={5000} duration={1.5} separator=""></CountUp>
                </div>
                <div className="Unit">kg</div>
            </div>
            <div className="InfoItem">
                昨日最高产奶量
                <div className="Num">
                    <CountUp start={0} end={5000} duration={1.5} separator=""></CountUp>
                </div>
                <div className="Unit">kg</div>
            </div>
            <div className="InfoItem">
                昨日平均产奶量
                <div className="Num">
                    <CountUp start={0} end={5000} duration={1.5} separator=""></CountUp>
                </div>
                <div className="Unit">kg</div>
            </div>
        </PageTopStyle>
    )
}