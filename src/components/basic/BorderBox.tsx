import { FC } from "react"

export const BorderBox: FC<{children: any}> = ({ children }) => {
    return (
        <div>
            { children }
        </div>
    )
}