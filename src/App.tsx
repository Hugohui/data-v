import { useRoutes } from "react-router-dom";
import { Globalstyle } from "./style/global";
import routers from "./router";
import { previewFitScale } from "./utils/previewScale";
import { useEffect, useRef, useState } from "react";
import { BasicLayout } from "./layout/BasicLayout";
import { useMountedState } from "./hooks/useMountedState";


function App() {
  const scaleRef = useRef<HTMLDivElement>(null)
  const element: any = useRoutes(routers);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isMounted = useMountedState()

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // 进入全屏模式
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        // Firefox
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        // Chrome, Safari and Opera
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        // IE/Edge
        document.documentElement.requestFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      // 在这里处理F11按键按下的事件
      console.log('F11 key is down');
      toggleFullscreen()
    }
  };

  const renderEl = () => {
    return ['/', '/login'].includes(element.props.match.pathname) ? 
    element :
    <BasicLayout>{element}</BasicLayout>
  }

  useEffect(() => {
    const { calcRate, windowResize, unWindowResize} = previewFitScale(1920, 1080, scaleRef.current)
    calcRate()
    windowResize()
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      unWindowResize()
      document.removeEventListener('keydown', handleKeyDown);
    } 
  }, [isMounted])


  return (
    <div style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: ' translate(-50%, -50%)',
    }}>
      {/* 全局样式 */}
      <Globalstyle></Globalstyle>
      <div ref={scaleRef}>
        {
          isMounted && renderEl()
        }
      </div>
      
    </div>
  );
}

export default App;
