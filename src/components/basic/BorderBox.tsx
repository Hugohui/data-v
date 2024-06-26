import { FC } from "react"
import { BorderBoxStyle, BorderBoxHeaderStyle, BorderBoxContentStyle } from './BorderBoxStyle'

interface BorderBoxI {
    height?: string;
    size?: string;
    title: string;
    children?: any;
}

export const BorderBox: FC<BorderBoxI> = (props) => {
    return (
        <BorderBoxStyle $height={props.height} $size={props.size}>
            <BorderBoxHeaderStyle $size={props.size}>{ props.title }</BorderBoxHeaderStyle>
            <BorderBoxContentStyle>{ props.children }</BorderBoxContentStyle>
        </BorderBoxStyle>
    )
}