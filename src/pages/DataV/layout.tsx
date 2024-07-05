import { PageContent } from "./style"
import { PageLeft } from "./PageLeft"
import { PageCenter } from "./PageCenter"
import { PageRight } from "./PageRight"
import { PageBG } from "./PageBG"

export const DataVLayout = () => {
    return (
        <PageContent>
            <PageBG></PageBG>

            <PageLeft></PageLeft>

            <PageCenter></PageCenter>

            <PageRight></PageRight>
        </PageContent>
    )
}