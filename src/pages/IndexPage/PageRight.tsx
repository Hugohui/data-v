import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"

export const PageRight = () => {
    return (
        <PageRightStyle>
            <BorderBox title="繁育实时数据"></BorderBox>
            <BorderBox title="羊群类型占比"></BorderBox>
            <BorderBox title="产奶变化趋势"></BorderBox>
        </PageRightStyle>
    )
}