import { debounce } from 'lodash';
import { useCallback, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { EChartsType } from 'echarts';
import { RendererType } from 'echarts/types/src/util/types.js';
import china from '../assets/map/china.json';
import { GeoJSONCompressed } from 'echarts/types/src/coord/geo/geoTypes.js';

type OptionType = {
  [T: string]: unknown
}

const state = {
  width: '100%',
  height: '100%',
};

echarts.registerMap('china', china as unknown as GeoJSONCompressed)

const EChartsCommon = (props: {
  renderer?: RendererType,
  notMerge?: boolean,
  lazyUpdate?: boolean,
  option: OptionType,
  instanceHandle?: (instance: EChartsType) => void
  onClick?: Function
  onUnSelect?: Function
  onSelect?: Function
  onDrag?: Function
  onZoom?: Function
}) => {
  const drawDomRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<EChartsType | null>(null);

  const dispose = () => {
    if (!chartRef.current) {
      return;
    }
    chartRef.current.dispose();
    chartRef.current = null;
  };

  const resize = debounce(() => {
    chartRef.current && chartRef.current.resize();
  }, 100);


  const setOption = useCallback((option: OptionType) => {
    if (!chartRef.current) {
      return;
    }
    const notMerge = props.notMerge;
    const lazyUpdate = props.lazyUpdate;
    chartRef.current.setOption(option, notMerge, lazyUpdate);
  }, [props.notMerge, props.lazyUpdate]);


  // 初始化组件
  const initChart = (dom: HTMLDivElement | null) => {

    if (chartRef.current) return

    if (!dom) return

    // renderer 用于配置渲染方式 可以是 svg 或者 canvas
    const renderer = props.renderer || 'canvas';
    chartRef.current = echarts.init(dom, null, {
      renderer,
      width: 'auto',
      height: 'auto',
    });

    // 执行初始化的任务，例如注册地图
    if (props.instanceHandle) props.instanceHandle(chartRef.current)
    
    // 配置项
    setOption(props.option);

    // 监听屏幕缩放，重新绘制 echart 图表
    window.addEventListener('resize', resize);

    // 监听点击事件
    chartRef.current.on('click', (params: any) => {

      // 如果点击的是地图系列（series）
      if (params.componentType === 'series') {

        // pointInPixel 是点击位置的像素坐标
        var pointInPixel = [params.event.offsetX, params.event.offsetY];
        

        // 转换为经纬度，pointInGeo 是点击位置的经纬度坐标，格式为 [longitude, latitude]
        var pointInGeo = chartRef.current?.convertFromPixel({ seriesIndex: params.seriesIndex }, pointInPixel);

        props.onClick && props.onClick({ name: params.name, pointInPixel, pointInGeo, params })
      }

    });

    // 监听取消选中事件
    chartRef.current.on('unselect', (params: any) => {
      props.onUnSelect && props.onUnSelect(params)
    });

    // 监听选中事件
    chartRef.current.on('select', (params: any) => {
      props.onSelect && props.onSelect(params)
    });

    // 监听 georoam 事件
    chartRef.current.on('georoam', (params: any) => {
      if (params.zoom != null) {
        // 缩放事件处理
        props.onDrag && props.onDrag(params)
      } else if (params.dx != null && params.dy != null) {
        // 拖拽事件处理
        props.onZoom && props.onZoom(params)
      }
    });
  }

  const initHandle = () => {
    // 还没实例走初始化
    if (!chartRef.current) {
      initChart(drawDomRef.current);
    } else {
      setOption(props.option);
    }
  }

  useEffect(() => {
    // 组件卸载
    return () => {
      window.removeEventListener('resize', resize);
      dispose()
    }
  }, [])

  // 每次更新组件都重置
  useEffect(() => {
    initHandle()
  }, [props.option])

  return (
    <div
      className='default-chart'
      ref={drawDomRef}
      style={{ width: state.width, height: state.height }}
    />
  )
}

export default EChartsCommon