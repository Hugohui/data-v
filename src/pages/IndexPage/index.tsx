import { IndexLayout } from './layout'
import { LayoutStyle } from "../../style/globalStyleSet"
import { PageIndexStyle, IndexContentStyle } from './style'
import { HeaderIndex } from '../../layout/HeaderIndex'
import { Footer } from '../../layout/Footer'
import { IndexMap } from './charts/IndexMap'
import { PageLeft } from './PageLeft'
import { PageCenter } from './PageCenter'
import { PageRight } from './PageRight'
import Dialog from '@/components/basic/Dialog'
import { useEffect, useState } from 'react'
import SheePedigree from './charts/SheePedigree'
import useEvent from '@/hooks/useEventHook'

export const IndexPage = () => {
    const [showSheePedigree, setShowSheePedigree] = useState(false)
    const { subscribe } = useEvent()
    const [sheePedigree, setSheePedigree] = useState<any>({})

    useEffect(() => {
        subscribe('onMapScaleGraphClick', (data: any) => {
            if (data) {
                setSheePedigree(data)
                setShowSheePedigree(true)
            }
        })
    }, [])

    return (
        <LayoutStyle>
            <PageIndexStyle>
                <Dialog title={sheePedigree?.PastureName} show={showSheePedigree} setShow={setShowSheePedigree}>
                    <SheePedigree farmId={sheePedigree?.PastureCode}></SheePedigree>
                </Dialog>

                <IndexMap></IndexMap>

                <HeaderIndex></HeaderIndex>

                <PageLeft></PageLeft>

                <PageCenter></PageCenter>

                <PageRight></PageRight>

                <Footer></Footer>
            </PageIndexStyle>
        </LayoutStyle>
        
    )
}