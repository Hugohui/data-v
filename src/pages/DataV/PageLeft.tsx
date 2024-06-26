import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"

export const PageLeft = () => {
    return (
        <PageLeftStyle>
            <BorderBox title="育肥水平评估"></BorderBox>
            <BorderBox title="饲喂草料量"></BorderBox>
            <BorderBox title="清粪概况"></BorderBox>
        </PageLeftStyle>
    )
}