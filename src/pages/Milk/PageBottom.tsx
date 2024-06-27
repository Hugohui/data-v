import { PageBottomStyle } from "./style";
import { BorderBox } from "../../components/basic/BorderBox"

export const PageBottom = () => {
    return (
        <PageBottomStyle>
            <BorderBox title="日总产奶量统计" height="378" size="large"></BorderBox>
            <BorderBox title="日均单产量统计" height="378" size="large"></BorderBox>
        </PageBottomStyle>
    )
}