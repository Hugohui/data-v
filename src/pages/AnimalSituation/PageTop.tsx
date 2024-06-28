import { PageTopStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"
import FattenRatio from "./charts/FattenRatio";
import DungClear from "./charts/DungClear";

export const PageTop = () => {
    return (
        <PageTopStyle>
            <BorderBox title="育肥水平评估" height="410">
                <FattenRatio data={[]}></FattenRatio>
            </BorderBox>
            <BorderBox title="饲喂草料量" height="410"></BorderBox>
            <BorderBox title="清粪概况" height="410" className="DungClearBox">
                <div className="DungClear">
                    <DungClear title="羔羊成活率" value={60} formatter="{value}%"></DungClear>
                </div>
                <div className="DungClear">
                    <DungClear title="胎间隔" value={80.8} formatter="{value}天" backgroundColor={['#1F5068', '#5595EC', '#2BE6D0']}></DungClear>
                </div>
                <div className="DungClear">
                    <DungClear title="受胎率" value={60} formatter="{value}%" backgroundColor={["#543C1B", "#B8E638", "#F29322"]}></DungClear>
                </div>
            </BorderBox>
        </PageTopStyle>
    )
}