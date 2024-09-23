import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { DialogStyle, DialogBoxStyle, DialogHeaderStyle, DialogContentStyle } from "./DialogStyle"
import { previewFitScale } from "../../utils/previewScale";

interface DialogI {
    title?: string
    show: boolean
    setShow: Function
    children: any,
    width?: number,
    height?: number,
    backgroundImag?: any,
    titleAlign?: any,
    titleFontSize?: any
}

const Dialog = (props: DialogI) => {

    const scaleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const { calcRate, windowResize, unWindowResize} = previewFitScale(1920, 1080, scaleRef.current)
        calcRate()
        windowResize()
    
        return () => {
          unWindowResize()
        } 
      })

    const DialogBox = () => {
        return createPortal(
            (<DialogStyle className="DialogStyle">
                <DialogBoxStyle ref={scaleRef} 
                    width={props.width} 
                    height={props.height} 
                    backgroundImag={props.backgroundImag}
                >
                    <DialogHeaderStyle titleAlign={props.titleAlign} titleFontSize={props.titleFontSize}>
                        {props.title}
                        <div className="close" title="关闭" onClick={() => props.setShow(false)}></div>
                    </DialogHeaderStyle>
                    <DialogContentStyle>
                        {props.children}
                    </DialogContentStyle>
                </DialogBoxStyle>
            </DialogStyle>), document.querySelector('#root') as Element)
    }

    return (
        props.show ? <DialogBox></DialogBox> : <></>
    )
}

export default Dialog