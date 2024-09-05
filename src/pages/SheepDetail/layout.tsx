import { PageContent } from "./style"
import { PageLeft } from "./PageLeft"
import { PageCenter } from "./PageCenter"
import { PageRight } from "./PageRight"

export const SheepDetailLayout = () => {
    return (
        <PageContent>
            <PageLeft></PageLeft>

            <PageCenter></PageCenter>

            <PageRight></PageRight>
        </PageContent>
    )
}