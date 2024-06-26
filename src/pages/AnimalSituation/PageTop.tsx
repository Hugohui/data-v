import { PageTopStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"

export const PageTop = () => {
    return (
        <PageTopStyle>
            <BorderBox title="育肥水平评估" height="410"></BorderBox>
            <BorderBox title="饲喂草料量" height="410"></BorderBox>
            <BorderBox title="清粪概况" height="410"></BorderBox>
        </PageTopStyle>
    )
}