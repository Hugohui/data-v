import { FC } from "react"
import { BorderBoxStyle, BorderBoxHeaderStyle, BorderBoxContentStyle } from './BorderBoxStyle'
import { ErrorBoundary } from "react-error-boundary";
import { FallbackComponent } from "../FallbackComponent";

interface BorderBoxI {
    height?: string;
    width?: string;
    size?: string;
    title?: string;
    children?: any;
    className?: string
    moreText?: string
    onMoreTextClick?: Function
    hideTitle?: boolean
    toolBar?: any
}

export const BorderBox: FC<BorderBoxI> = (props) => {
    return (
        <BorderBoxStyle $height={props.height} $width={props.width} $size={props.size} className={props.className}>
            { !props.hideTitle ?
                <BorderBoxHeaderStyle className="BoxHeader" $size={props.size}>
                    <div>{ props.title }</div>
                    {props.moreText ? <div className="MoreInfo" onClick={() => {props.onMoreTextClick && props.onMoreTextClick()}}>{props.moreText}</div> : ''}
                    {props.toolBar ? <div className="toolBar">{props.toolBar}</div> : ''}
                    
                </BorderBoxHeaderStyle> : ''
            }
            <BorderBoxContentStyle className="BoxContent" hidetitle={props?.hideTitle?.toString()}>
                <ErrorBoundary FallbackComponent={FallbackComponent} onError={(err) => {
                    console.log("=====catch error=====", err)
                }}>
                    { props.children }
                </ErrorBoundary>
            </BorderBoxContentStyle>
        </BorderBoxStyle>
    )
}