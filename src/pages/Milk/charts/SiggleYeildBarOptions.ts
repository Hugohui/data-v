import * as echarts from 'echarts';

export const barOptions = (options: any) => {
  const xAxis = options?.dataList?.map((item: any) => item.name) || []
  const data = options?.dataList?.map((item: any) => item.value) || []
  const max = options.yAxis || Math.ceil(Math.max(...data) / 100) * 100

  return {
    tooltip: {
      trigger: 'axis'
    },
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"50px",
      bottom:"40px"
    },
    xAxis: {
      type: 'category',
      name: '日',
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
      // interval: max / 5, // 设置纵坐标的间隔
      // splitLine: false,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff',
        }
      },
      axisLabel: {
        fontSize: 14,
        fontWeight: 400
      },
      splitLine: {
        lineStyle: {
          width: 0.5
        }
      }
    },
    series: [
      {
        data: data,
        type: 'bar',
        barWidth: 14,
        itemStyle: {
          borderRadius: [2, 2, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#FCF366' },
            { offset: 1, color: '#FEC425' },
          ])
        },
      }
    ]
  }
};