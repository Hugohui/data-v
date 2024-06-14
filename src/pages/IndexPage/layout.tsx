import { IndexPageContent } from "./style"
import { PageLeft } from "./PageLeft"
import { PageCenter } from "./PageCenter"
import { PageRight } from "./PageRight"

export const IndexLayout = () => {
    return (
        <IndexPageContent>
            <PageLeft></PageLeft>

            <PageCenter></PageCenter>

            <PageRight></PageRight>
        </IndexPageContent>
    )
}