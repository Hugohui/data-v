import { useEffect, useLayoutEffect } from "react";
import { AnchorPoint } from "./components/AnchorPoint"
import { PageBGStyle } from "./style"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// require('./pageSvg/pageBGSvg')
// import {animationData} from './pageSvg/move'

const LoadScript = ({ url }: any) => {
  useEffect(() => {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = () => {
      // 执行script中的函数或者其他逻辑
      console.log('Script loaded and executed.');
    };
    document.body.appendChild(script);
 
    // 清理函数，组件卸载时移除script标签
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
 
  return null;
};

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