import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { DialogStyle, DialogBoxStyle, DialogHeaderStyle, DialogContentStyle } from "./DialogStyle"
import { previewFitScale } from "../../utils/previewScale";

interface searchOptionI {
    placeholder?: string,
    onSearch?: Function
}

interface DialogI {
    title?: string
    show: boolean
    setShow: Function
    children: any,
    width?: number,
    height?: number,
    backgroundimag?: any,
    title_align?: any,
    title_font_size?: any
    search?: searchOptionI
}

const Dialog = (props: DialogI) => {

    const scaleRef = useRef<HTMLDivElement>(null)
    const searchData = useRef('')

    const onSearchClick = () => {
        props?.search?.onSearch && props?.search?.onSearch(searchData.current)
    }

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
                    backgroundimag={props.backgroundimag}
                >
                    <DialogHeaderStyle title_align={props.title_align} title_font_size={props.title_font_size}>
                        {props.title}
                        {
                            props.search ?
                            <div className="search">
                                <input type="text" onInput={(e: any) => {
                                    searchData.current = e.target.value
                                }} placeholder={props?.search?.placeholder} />
                                <span className="searchIcon" onClick={onSearchClick}></span>
                            </div>: ''
                        }
                        
                        <div className="close" title="关闭" onClick={() => props.setShow(false)}></div>
                    </DialogHeaderStyle>
                    <DialogContentStyle className="DialogContentStyle">
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