import { PageTopStyle } from "./style";

export const PageTop = () => {
    return (
        <PageTopStyle>
            <div className="InfoItem">
                昨日上厅羊<div className="Num">5000</div><div className="Unit">只</div>
            </div>
            <div className="InfoItem">
                昨日总产奶量<div className="Num">5000</div><div className="Unit">kg</div>
            </div>
            <div className="InfoItem">
                昨日最高产奶量<div className="Num">5000</div><div className="Unit">kg</div>
            </div>
            <div className="InfoItem">
                昨日平均产奶量<div className="Num">5000</div><div className="Unit">kg</div>
            </div>
        </PageTopStyle>
    )
}