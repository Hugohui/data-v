import { PageBottomStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"

export const PageBottom = () => {
    return (
        <PageBottomStyle>
            <BorderBox title="育肥水平评估" height="438" size="large"></BorderBox>
            <BorderBox title="饲喂草料量" height="438" size="large"></BorderBox>
        </PageBottomStyle>
    )
}