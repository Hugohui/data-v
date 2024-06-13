import { IndexLayout } from './layout'
import { LayoutStyle, PageStyle } from "../../style/globalStyleSet"
import { Header } from '../../layout/Header'
import { Footer } from '../../layout/Footer'

export const IndexPage = () => {
    return (
        <LayoutStyle>
            <PageStyle>
                <Header></Header>

                <IndexLayout></IndexLayout>

                <Footer></Footer>
            </PageStyle>
        </LayoutStyle>
        
    )
}