import { IndexLayout } from './layout'
import { LayoutStyle } from "../../style/globalStyleSet"
import { PageIndexStyle, IndexContentStyle } from './style'
import { HeaderIndex } from '../../layout/HeaderIndex'
import { Footer } from '../../layout/Footer'
import { IndexMap } from './charts/IndexMap'
import { PageLeft } from './PageLeft'
import { PageCenter } from './PageCenter'
import { PageRight } from './PageRight'

export const IndexPage = () => {
    return (
        <LayoutStyle>
            <PageIndexStyle>
                <IndexMap></IndexMap>

                <HeaderIndex></HeaderIndex>

                {/* <IndexLayout></IndexLayout> */}
                <PageLeft></PageLeft>

                <PageCenter></PageCenter>

                <PageRight></PageRight>

                <Footer></Footer>
            </PageIndexStyle>
        </LayoutStyle>
        
    )
}