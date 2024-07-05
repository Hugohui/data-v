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
    setOption(props.option);
    // 监听屏幕缩放，重新绘制 echart 图表
    window.addEventListener('resize', resize);
    chartRef.current.on('click', (params: any) => {
      if (params.componentType === 'series') {
        // 如果点击的是地图系列（series）
        var pointInPixel = [params.event.offsetX, params.event.offsetY];
        // pointInPixel 是点击位置的像素坐标

        // 转换为经纬度
        var pointInGeo = chartRef.current?.convertFromPixel({ seriesIndex: params.seriesIndex }, pointInPixel);
        // pointInGeo 是点击位置的经纬度坐标，格式为 [longitude, latitude]

        console.log('点击位置的像素坐标:', pointInPixel);
        console.log('点击位置的经纬度坐标:', pointInGeo);
        props.onClick && props.onClick({ name: params.name, pointInPixel, pointInGeo })
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