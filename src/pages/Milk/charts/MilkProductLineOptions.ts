import * as echarts from 'echarts';

export const lineineOptions = (options: any) => {
  const xAxis = options?.map((item: any) => item.name) || []
  const data = options?.map((item: any) => item.value) || []
  const max = Math.ceil(Math.max(...data) / 100) * 100

  return {
    tooltip: {
      trigger: 'axis'
    },
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"40px",
      bottom:"40px"
    },
    xAxis: {
      type: 'category',
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
      name: 'kg',
      min: 0, // 设置纵坐标的最小值
      max: max, // 设置纵坐标的最大值
      interval: max / 5, // 设置纵坐标的间隔
      axisLine: {
        show: true,
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
    series: [
      {
        data: data,
        type: 'bar',
        barWidth: 14,
        itemStyle: {
          borderRadius: [2, 2, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#B243FF' },
            { offset: 1, color: '#B243FF' },
          ])
        },
        // symbol: 'circle', // 设置标记为圆形
        // symbolSize: 4, // 设置圆形标记的大小
      //   itemStyle: {
      //     normal: {
      //       color: '#B243FF', // 设置圆点的填充颜色
      //       borderColor: '#B243FF', // 设置圆点边框颜色
      //       // borderWidth: 2 // 设置圆点边框宽度
      //     }
      //   },
      //   areaStyle: { // 添加区域样式
      //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //       offset: 0,
      //       color: 'rgba(178, 67, 255, 0.8)' // 渐变颜色，起始颜色
      //     }, {
      //       offset: 1,
      //       color: 'rgba(178, 67, 255, 0)' // 渐变颜色，结束颜色
      //     }])
      //   }
      }
    ]
  }
};