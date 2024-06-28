import { PageBottomStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"
import KeepLine from "./charts/KeepLine";
import ForageYield from "./charts/ForageYield";

export const PageBottom = () => {
    return (
        <PageBottomStyle>
            <BorderBox title="存栏统计" height="438" size="large">
                <KeepLine></KeepLine>
            </BorderBox>
            <BorderBox title="饲喂草料量" height="438" size="large">
                <ForageYield></ForageYield>
            </BorderBox>
        </PageBottomStyle>
    )
}