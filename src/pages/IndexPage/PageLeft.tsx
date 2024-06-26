import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"

export const PageLeft = () => {
    return (
        <PageLeftStyle>
            <BorderBox title="实时数据"></BorderBox>
            <BorderBox title="各牧场存栏占比"></BorderBox>
            <BorderBox title="羊群变化趋势"></BorderBox>
        </PageLeftStyle>
    )
}