import { PageContent } from "./style"
import { PageTop } from "./PageTop"
import { PageBottom } from "./PageBottom"

export const AnimalLayout = () => {
    return (
        <PageContent>
            <PageTop></PageTop>
            <PageBottom></PageBottom>
        </PageContent>
    )
}