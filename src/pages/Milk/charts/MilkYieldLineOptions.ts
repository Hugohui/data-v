import * as echarts from 'echarts';

export const lineOptions = (data: any) => (
  {
    grid:{ // 让图表占满容器
      top:"40px",
      left:"80px",
      right:"40px",
      bottom:"40px"
    },
    xAxis: {
      type: 'category',
      data: data?.map((item: any) => item.month),
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        },
      }
    },
    yAxis: {
      type: 'value',
      name: '（Kg）',
      min: 0, // 设置纵坐标的最小值
      max: 2500, // 设置纵坐标的最大值
      interval: 500, // 设置纵坐标的间隔
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
        data: data?.map((item: any) => item.Yield),
        type: 'line',
        name: "月度产奶量",
        stack: 'Total',
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 8, // 设置圆形标记的大小
        smooth: true,
        itemStyle: {
          normal: {
            color: '#6BD25E', // 设置圆点的填充颜色
            borderColor: '#6BD25E', // 设置圆点边框颜色
            // borderWidth: 2 // 设置圆点边框宽度
          }
        },
      }
    ]
  });