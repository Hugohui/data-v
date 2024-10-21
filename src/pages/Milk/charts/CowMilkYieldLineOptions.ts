import * as echarts from 'echarts';

export const lineOptions = (options: any) => {
  console.log('dataList', options)
  const xAxis = options?.dataList?.map((item: any) => item.name) || []
  const data = options?.dataList?.map((item: any) => item.value) || []
  const max = options.yAxis || Math.ceil(Math.max(...data) / 100) * 100

  return {
    grid:{ // 让图表占满容器
      top:"60px",
      left:"80px",
      right:"40px",
      bottom:"40px"
    },
    xAxis: {
      type: 'category',
      name: options.xUnit,
      data: xAxis,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        },
      }
    },
    yAxis: {
      type: 'value',
      name: '产奶量\n（kg）',
      min: 0, // 设置纵坐标的最小值
      max: max, // 设置纵坐标的最大值
      interval: max / 5, // 设置纵坐标的间隔
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff'
        },
      },
      splitLine: {
        lineStyle: {
          width: 0.5
        }
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    series: [
      {
        data,
        type: 'line',
        name: "产奶量",
        stack: 'Total',
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 8, // 设置圆形标记的大小
        smooth: true,
        itemStyle: {
          normal: {
            color: '#F6E945', // 设置圆点的填充颜色
            borderColor: '#F6E945', // 设置圆点边框颜色
          }
        },
      }
    ]
  }
};