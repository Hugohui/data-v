import { PageRightStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"


export const PageRight = () => {
    return (
       <PageRightStyle>
            <BorderBox title="二氧化碳"></BorderBox>
            <BorderBox title="光照"></BorderBox>
            <BorderBox title="水质"></BorderBox>
       </PageRightStyle>
    )
}