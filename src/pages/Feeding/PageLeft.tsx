import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import { MaterialListTable } from "./charts/MaterialListTable"

export const PageLeft = () => {
    return (
        <PageLeftStyle>
            <BorderBox height="482" title="料单执行情况">
                <MaterialListTable></MaterialListTable>
            </BorderBox>
            <BorderBox height="368" title="上料误差率"></BorderBox>
        </PageLeftStyle>
    )
}