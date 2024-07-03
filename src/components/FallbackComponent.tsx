import { FallbackComponentStyle } from "./FallbackComponentStyle"

export const FallbackComponent = ({error, resetErrorBoundary}: any) => {
    console.log("---FallbackComponent---", error)
    return (
        <FallbackComponentStyle>
            <div className="message">抱歉，好像出错了~</div>
            {/* <div className="retry" onClick={resetErrorBoundary}>点击重试</div> */}
        </FallbackComponentStyle>
    )
}