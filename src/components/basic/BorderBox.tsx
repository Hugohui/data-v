import { FC } from "react"
import { BorderBoxStyle, BorderBoxHeaderStyle, BorderBoxContentStyle } from './BorderBoxStyle'

interface BorderBoxI {
    height?: string;
    width?: string;
    size?: string;
    title: string;
    children?: any;
    className?: string
}

export const BorderBox: FC<BorderBoxI> = (props) => {
    return (
        <BorderBoxStyle $height={props.height} $width={props.width} $size={props.size} className={props.className}>
            <BorderBoxHeaderStyle className="BoxHeader" $size={props.size}>{ props.title }</BorderBoxHeaderStyle>
            <BorderBoxContentStyle className="BoxContent">{ props.children }</BorderBoxContentStyle>
        </BorderBoxStyle>
    )
}