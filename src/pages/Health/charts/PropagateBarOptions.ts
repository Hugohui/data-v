import * as echarts from 'echarts';

export const barOptions = (options: any) => {
  const data = options.list.map((item: any) => item.value)
  const xAxis = options?.xAxislist || []
  const max = options.yaxis || Math.ceil(Math.max(...data) / 100) * 100
  return {
    tooltip: {
      trigger: 'axis'
    },
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"50px",
      bottom:"30px"
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
      name: '只',
      min: 0, // 设置纵坐标的最小值
      max: max, // 设置纵坐标的最大值
      // interval: max / 5, // 设置纵坐标的间隔
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
        data,
        type: 'bar',
        barWidth: 26,
        itemStyle: {
          borderRadius: [8, 8, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#F4DF31' },
            { offset: 1, color: '#E5DB3F' },
            
          ])
        },
      }
    ]
  }
};