import { FallbackComponentStyle } from "./FallbackComponentStyle"

export const FallbackComponent = ({error, resetErrorBoundary}: any) => {
    
    return (
        <FallbackComponentStyle>
            抱歉，好像出错了~
        </FallbackComponentStyle>
    )
}