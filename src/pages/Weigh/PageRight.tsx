import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import WeighSection from './charts/WeighSection'
import IncrementBar from "./charts/IncrementBar"

export const PageRight = () => {
    return (
        <PageRightStyle>
            <BorderBox title="羊群体重区间占比" height="428" className="GaugeBox">
                <div className="GaugeBoxItem">
                    <WeighSection title="5-30kg" value={60} formatter="{value}%"></WeighSection>
                </div>
                <div className="GaugeBoxItem">
                    <WeighSection title="30-80kg" value={80.8} formatter="{value}%" backgroundColor={['#1F5068', '#5595EC', '#2BE6D0']}></WeighSection>
                </div>
                <div className="GaugeBoxItem">
                    <WeighSection title="80-280kg" value={60} formatter="{value}%" backgroundColor={["#543C1B", "#B8E638", "#F29322"]}></WeighSection>
                </div>
            </BorderBox>
            <BorderBox title="各分群日增重" height="428">
                <IncrementBar></IncrementBar>
            </BorderBox>
        </PageRightStyle>
    )
}