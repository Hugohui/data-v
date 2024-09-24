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
import sheePedigreeBgFull from '@/assets/img/SheePedigreeBgFull.png'

export const IndexPage = () => {
    const [showSheePedigree, setShowSheePedigree] = useState(false)
    const { subscribe } = useEvent()
    const [sheePedigree, setSheePedigree] = useState<any>({})
    const navigate = useNavigate()
    const rangeOption = {
        radius: 400,
        center1: [50, 50],
        center2: [1600, 50],
        center3: [50, 400],
        center4: [1600, 400]
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
                <Dialog 
                    width={1167}
                    height={710}
                    title={sheePedigree?.PastureName} 
                    show={showSheePedigree} setShow={setShowSheePedigree}
                    backgroundimag={sheePedigreeBgFull}
                    title_align="center"
                    title_font_size={24}
                >
                    <SheePedigree farmId={sheePedigree?.PastureCode} rangeOption={rangeOption}></SheePedigree>
                    <EnterPastureStyle onClick={toDetail}></EnterPastureStyle>
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