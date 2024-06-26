import { IndexLayout } from './layout'
import { LayoutStyle } from "../../style/globalStyleSet"
import { PageIndexStyle } from './style'
import { HeaderIndex } from '../../layout/HeaderIndex'
import { Footer } from '../../layout/Footer'

export const IndexPage = () => {
    return (
        <LayoutStyle>
            <PageIndexStyle>
                <HeaderIndex></HeaderIndex>

                <IndexLayout></IndexLayout>

                <Footer></Footer>
            </PageIndexStyle>
        </LayoutStyle>
        
    )
}