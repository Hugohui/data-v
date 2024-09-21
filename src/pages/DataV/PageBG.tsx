import { useEffect, useLayoutEffect } from "react";
import { AnchorPoint } from "./components/AnchorPoint"
import { PageBGStyle } from "./style"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const PageBG = () => {

    useLayoutEffect(() => {
        var params = {
            container: document.getElementById('lottie'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: (window as any).animationData
        };
    
        (window as any).lottie.loadAnimation(params);

        return () => {
          (window as any)?.lottie && (window as any)?.lottie?.destroy()
        }
    }, [])

    return (
        <TransformWrapper 
            initialScale={1}
            maxScale={4}
            minScale={0.6}
        >
            <TransformComponent>
                <AnchorPoint></AnchorPoint>
                <PageBGStyle id="lottie">
                </PageBGStyle>
            </TransformComponent>
      </TransformWrapper>
    )
}