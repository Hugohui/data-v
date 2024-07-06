import { useState, useEffect } from "react";

export const useMountedState = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
      setIsMounted(true);
      return () => setIsMounted(false); // 组件卸载时设置为未挂载状态
    }, []);
    return isMounted;
  }