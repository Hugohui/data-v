import * as echarts from 'echarts';

export const milkTendencyBarOptions = (options: any) => {
  const data = options?.ListData?.map((item: any) => item.value || 0) || []

  const max = Math.ceil(Math.max(...data) / 100) * 100

  return {
    grid:{ // 让图表占满容器
      top:"30px",
      left:"50px",
      right:"50px",
      bottom:"20px"
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      name: '月',
      data: options.xAxisList,
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
    series: [
      {
        data,
        type: 'bar',
        barWidth: 8,
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#5F31F4' },
            { offset: 1, color: '#993FE5' },
            
          ])
        },
      }
    ]
  }
};