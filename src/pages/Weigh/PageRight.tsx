import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"

export const PageRight = () => {
    return (
        <PageRightStyle>
            <BorderBox title="羊只列表" height="428"></BorderBox>
            <BorderBox title="羔羊出生体重分布图" height="428"></BorderBox>
        </PageRightStyle>
    )
}