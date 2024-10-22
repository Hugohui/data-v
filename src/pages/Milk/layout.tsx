import { PageContent } from "./style"
import { PageTop } from "./PageTop"
import { PageBottom } from "./PageBottom"
import { PageMiddle } from "./PageMiddle"
import Dialog from "@/components/basic/Dialog"
import { useEffect, useMemo, useRef, useState } from "react"
import { SheepListTable } from "./charts/SheepListTable"
import { AnalysisSheepListTable } from "./charts/AnalysisSheepListTable"
import useEvent from "@/hooks/useEventHook"
import { SheepMonthListTable } from "./charts/SheepMonthListTable"
import { DayMilkProductSheepListTable } from "./charts/DayMilkProductSheepListTable"
import CowMilkYieldLine from "./charts/CowMilkYieldLine"

export const MilkLayout = () => {
    const { subscribe } = useEvent()
    const [showDialog, setShowDialog] = useState(false)
    const [showDayMilkDialog, setShowDayMilkDialog] = useState(false)
    const [showListDialog, setShowListDialog] = useState(false)
    const [showAnalysisDialog, setShowAnalysisDialog] = useState(false)
    const [showCodeDialog, setShowCodeDialog] = useState(false)
    const [sheepInfo, setSheepInfo] = useState<any>()
    const [cowMilkYieldLineParams, setCowMilkYieldLineParams] = useState<any>({})
    const dayTableRef = useRef<any>(null)
    const monthTableRef = useRef<any>(null)
    const shiftTableRef = useRef<any>(null)
    const analysisTableRef = useRef<any>(null)
    

    useEffect(() => {
        // 日产奶监听
        subscribe('onMilkProductClick', () => {
            setShowDayMilkDialog(true)
        })

        // 月产奶监听
        subscribe('onMilkMonthProductLineClick', (data: any) => {
            if (data) {
                setSheepInfo(data)
                setShowListDialog(true)
            }
        })

        // 班次日产奶监听
        subscribe('onMilkProductLineClick', (data: any) => {
            if (data) {
                setSheepInfo(data)
                setShowDialog(true)
            }
        })

        // 产奶分析监听
        subscribe('onAnalysisSheepBarClick', (data: any) => {
            if (data) {
                setSheepInfo(data)
                setShowAnalysisDialog(true)
            }
        })

        // 产奶分析列表点击监听
        subscribe('onAnalysisSheepTableClick', (data: any) => {
            if (data) {
                setCowMilkYieldLineParams(data)
                setShowCodeDialog(true)
            }
        })
    }, [])

    const memoAnalysisSheepListTable = useMemo(() => {
        return <AnalysisSheepListTable ref={analysisTableRef} info={sheepInfo}></AnalysisSheepListTable>
    }, [sheepInfo])

    return (
        <PageContent>
            {/* 日产奶量 */}
            <Dialog 
                title="日产奶量羊只列表" 
                width={800} 
                show={showDayMilkDialog} 
                setShow={setShowDayMilkDialog}
                search={{
                    placeholder: '羊只编号',
                    onSearch: (data: any) => {
                        dayTableRef.current && dayTableRef.current.queryByParams({CowCode: data})
                    }
                }}
            >
                <DayMilkProductSheepListTable ref={dayTableRef}></DayMilkProductSheepListTable>
            </Dialog>

            {/* 月产奶量弹窗 */}
            <Dialog 
                title={`${sheepInfo?.month}月产奶羊只列表`} 
                width={800} show={showListDialog} 
                setShow={setShowListDialog}
                search={{
                    placeholder: '羊只编号',
                    onSearch: (data: any) => {
                        monthTableRef.current && monthTableRef.current.queryByParams({CowCode: data})
                    }
                }}
            >
                <SheepMonthListTable ref={monthTableRef} info={sheepInfo}></SheepMonthListTable>
            </Dialog>

            {/* 班次日产奶量 */}
            <Dialog 
                title="日产奶量羊只列表" 
                width={800} 
                show={showDialog} 
                setShow={setShowDialog}
                search={{
                    placeholder: '羊只编号',
                    onSearch: (data: any) => {
                        shiftTableRef.current && shiftTableRef.current.queryByParams({CowCode: data})
                    }
                }}
            >
                <SheepListTable info={sheepInfo} ref={shiftTableRef}></SheepListTable>
            </Dialog>

            {/* 产奶养只列表 */}
            <Dialog 
                title="产奶羊只列表" 
                width={800} 
                show={showAnalysisDialog} 
                setShow={setShowAnalysisDialog}
                search={{
                    placeholder: '羊只编号',
                    onSearch: (data: any) => {
                        analysisTableRef.current && analysisTableRef.current.queryByParams({CowCode: data})
                    }
                }}
            >
                { memoAnalysisSheepListTable }
            </Dialog>

            {/* 产奶养只列表 */}
            <Dialog
                title={`编号${cowMilkYieldLineParams?.CowCode}羊只产奶曲线`}
                width={1000}
                show={showCodeDialog}
                setShow={setShowCodeDialog}
            >
                <CowMilkYieldLine info={cowMilkYieldLineParams}></CowMilkYieldLine>
            </Dialog>

            <PageTop></PageTop>
            <PageMiddle></PageMiddle>
            <PageBottom></PageBottom>
        </PageContent>
    )
}