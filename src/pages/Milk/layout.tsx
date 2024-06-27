import { PageContent } from "./style"
import { PageTop } from "./PageTop"
import { PageBottom } from "./PageBottom"
import { PageMiddle } from "./PageMiddle"

export const MilkLayout = () => {
    return (
        <PageContent>
            <PageTop></PageTop>
            <PageMiddle></PageMiddle>
            <PageBottom></PageBottom>
        </PageContent>
    )
}