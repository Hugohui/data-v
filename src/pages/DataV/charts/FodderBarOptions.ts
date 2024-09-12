import * as echarts from 'echarts';

export const barOptions = (options: any) => {
  const data = options?.dataList?.map((item: any) => item.value) || []

  let maxData: any = []
  const series = options?.dataList?.map((item: any) => {
    
    const d = item?.value?.map((i: any) => i[1])
    maxData = maxData.concat(d)
    return {
      name: item?.name,
      type: 'bar',
      stack: 'total',
      barWidth: 16,
      data: d
    }
  })

  const max = Math.ceil(Math.max(...maxData) / 100) * 100

  return {
    grid:{ // 让图表占满容器
      top:"40px",
      left:"60px",
      right:"30px",
      bottom:"40px"
    },
    tooltip: {
      trigger: 'axis',
    },
    dataZoom: [
      {
        type: 'slider',
        realtime: true,
        start: 0,
        end: 60,
        height: 40
      }
    ],
    xAxis: {
      type: 'category',
      data: options?.xAxisList,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        fontSize: 14,
        fontWeight: 400,
        rotate: -45,
        overflow: 'hidden'
      }
    },
    yAxis: {
      type: 'value',
      name: '吨',
      min: 0, // 设置纵坐标的最小值
      max: max, // 设置纵坐标的最大值
      interval: max / 5, // 设置纵坐标的间隔
      splitLine: false,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff',
        }
      },
      axisLabel: {
        fontSize: 14,
        fontWeight: 400
      }
    },
    series
    // [
    //   {
    //     data,
    //     type: 'bar',
    //     barWidth: 12,
    //     large: true,
    //     itemStyle: {
    //       borderRadius: [5, 5, 0, 0],
    //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //         { offset: 0, color: '#19FCDE' },
    //         { offset: 1, color: '#19FCDE' },
            
    //       ])
    //     }
    //   }
    // ]
  }
};