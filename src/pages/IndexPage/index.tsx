import { IndexLayout } from './layout'
import { LayoutStyle } from "../../style/globalStyleSet"
import { PageIndexStyle, IndexContentStyle, EnterPastureStyle } from './style'
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
import { setFarmInfo } from '@/utils/session'
import { useNavigate } from 'react-router-dom'

export const IndexPage = () => {
    const [showSheePedigree, setShowSheePedigree] = useState(false)
    const { subscribe } = useEvent()
    const [sheePedigree, setSheePedigree] = useState<any>({})
    const navigate = useNavigate()
    const rangeOption = {
        center1: [100, 200],
        center2: [600, 200],
        radius1: 200,
        radius2: 200
    }

    useEffect(() => {
        subscribe('onMapScaleGraphClick', (data: any) => {
            if (data) {
                setSheePedigree(data)
                setShowSheePedigree(true)
            }
        })
    }, [])

    const toDetail = () => {
        setFarmInfo(sheePedigree)
        navigate('/dataV')
    }

    return (
        <LayoutStyle>
            <PageIndexStyle>
                <Dialog title={sheePedigree?.PastureName} show={showSheePedigree} setShow={setShowSheePedigree}>
                    <SheePedigree farmId={sheePedigree?.PastureCode} rangeOption={rangeOption}></SheePedigree>
                    <EnterPastureStyle onClick={toDetail}>点击进入</EnterPastureStyle>
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