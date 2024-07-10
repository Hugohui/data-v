import * as echarts from 'echarts';

export const barOptions = (options: any) => {
  const xAxis = options?.map((item: any) => item.name) || []
  const data = options?.map((item: any) => item.value) || []
  const max = Math.ceil(Math.max(...data) / 100) * 100

  return {
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"50px",
      bottom:"40px"
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      // name: '月',
      data: xAxis,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        fontSize: 14,
        fontWeight: 400
      }
    },
    yAxis: {
      type: 'value',
      name: 'kg',
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
    series: [
      {
        data: data,
        type: 'bar',
        barWidth: 19,
        itemStyle: {
          borderRadius: [6, 6, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#F4DF31' },
            { offset: 1, color: '#E5DB3F' },
            
          ])
        },
      }
    ]
  }
};