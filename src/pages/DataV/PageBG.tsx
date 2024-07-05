import { AnchorPoint } from "./components/AnchorPoint"
import { PageBGStyle } from "./style"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const PageBG = () => {
    return (
        <TransformWrapper 
            initialScale={1}
            maxScale={4}
            minScale={0.6}
        >
            <TransformComponent>
                <PageBGStyle>
                    <AnchorPoint></AnchorPoint>
                </PageBGStyle>
            </TransformComponent>
      </TransformWrapper>
    )
}