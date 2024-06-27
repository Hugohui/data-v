import { PageBottomStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"

export const PageBottom = () => {
    return (
        <PageBottomStyle>
            <BorderBox title="近一年检疫统计" height="438" size="large"></BorderBox>
            <BorderBox title="近一年免疫统计" height="438" size="large"></BorderBox>
        </PageBottomStyle>
    )
}