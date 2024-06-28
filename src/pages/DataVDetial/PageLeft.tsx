import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"

export const PageLeft = () => {
    return (
        <PageLeftStyle>
            <BorderBox title="温湿度"></BorderBox>
            <BorderBox title="水槽温度"></BorderBox>
            <BorderBox title="氨气"></BorderBox>
        </PageLeftStyle>
    )
}