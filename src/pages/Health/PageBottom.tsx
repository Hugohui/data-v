import { PageBottomStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"
import QuarantineLine from "./charts/QuarantineLine";
import ImmunityLine from "./charts/ImmunityLine";

export const PageBottom = () => {
    return (
        <PageBottomStyle>
            <BorderBox title="近一年检疫统计" height="438" size="large">
                <QuarantineLine></QuarantineLine>
            </BorderBox>
            <BorderBox title="近一年免疫统计" height="438" size="large">
                <ImmunityLine></ImmunityLine>
            </BorderBox>
        </PageBottomStyle>
    )
}