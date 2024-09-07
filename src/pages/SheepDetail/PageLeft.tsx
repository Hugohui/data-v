import { PageLeftStyle } from "./style"
import { BorderBox } from "../../components/basic/BorderBox"
import { SheepInfoCard } from "./charts/SheepInfoCard"
import { FamlyDataCard } from "./charts/FamlyDataCard"

export const PageLeft = () => {
    return (
        <PageLeftStyle>
            <BorderBox title="羊只卡片" height="378">
                <SheepInfoCard></SheepInfoCard>
            </BorderBox>
            <BorderBox title="羊只谱系" height="480">
                <FamlyDataCard></FamlyDataCard>
            </BorderBox>
        </PageLeftStyle>
    )
}