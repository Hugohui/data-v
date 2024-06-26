import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"


export const PageRight = () => {
    return (
       <PageRightStyle>
            <BorderBox title="环境监测"></BorderBox>
            <BorderBox title="产奶量"></BorderBox>
            <BorderBox title="主要生产性能指标"></BorderBox>
       </PageRightStyle>
    )
}