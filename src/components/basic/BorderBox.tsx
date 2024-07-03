import { FC } from "react"
import { BorderBoxStyle, BorderBoxHeaderStyle, BorderBoxContentStyle } from './BorderBoxStyle'
import { ErrorBoundary } from "react-error-boundary";
import { FallbackComponent } from "../FallbackComponent";

interface BorderBoxI {
    height?: string;
    width?: string;
    size?: string;
    title: string;
    children?: any;
    className?: string
    moreText?: string
    onMoreTextClick?: Function
}

export const BorderBox: FC<BorderBoxI> = (props) => {
    return (
        <BorderBoxStyle $height={props.height} $width={props.width} $size={props.size} className={props.className}>
            <BorderBoxHeaderStyle className="BoxHeader" $size={props.size}>
                { props.title }
                {props.moreText ? <div className="MoreInfo" onClick={() => {props.onMoreTextClick && props.onMoreTextClick()}}>{props.moreText}</div> : ''}
            </BorderBoxHeaderStyle>
            <BorderBoxContentStyle className="BoxContent">
                <ErrorBoundary FallbackComponent={FallbackComponent}>
                    { props.children }
                </ErrorBoundary>
            </BorderBoxContentStyle>
        </BorderBoxStyle>
    )
}