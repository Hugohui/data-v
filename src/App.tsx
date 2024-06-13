import { useRoutes } from "react-router-dom";
import { Globalstyle } from "./style/global";
import routers from "./router";
import { previewFitScale } from "./utils/previewScale";
import { useEffect, useRef } from "react";


function App() {

  const scaleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { calcRate, windowResize, unWindowResize} = previewFitScale(1920, 1080, scaleRef.current)
    calcRate()
    windowResize()
    return () => {
      unWindowResize()
    } 
  })

  return (
    <div style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: ' translate(-50%, -50%)'
    }}>
      {/* 全局样式 */}
      <Globalstyle></Globalstyle>
      <div ref={scaleRef} >
        { useRoutes(routers) }
      </div>
      
    </div>
  );
}

export default App;
