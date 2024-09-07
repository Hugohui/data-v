import * as echarts from 'echarts';

export const processMontBodyAgeLineOptions = (options: any) => {
  return {
    tooltip: {
      trigger: 'axis'
    },
    grid: { // 让图表占满容器
      top: "50px",
      left: "60px",
      right: "50px",
      bottom: "30px"
    },
    legend: {
      textStyle: {
        color: "#FFF"
      }
    },
    xAxis: {
      type: 'category',
      data: options.xAxisList,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        },
      }
    },
    yAxis: [
      {
        type: 'value',
        name: 'kg',
        min: 0, // 设置纵坐标的最小值
        max: options.maxWeight, // 设置纵坐标的最大值
        interval: Math.ceil(options.maxWeight / 5), // 设置纵坐标的间隔
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
      {
        type: 'value',
        name: 'cm',
        min: 0, // 设置纵坐标的最小值
        max: options.maxHeight, // 设置纵坐标的最大值
        interval: Math.ceil(options.maxHeight / 5), // 设置纵坐标的间隔
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
      }
    ],
    series: [
      {
        data: options.weightList,
        type: 'line',
        name: "体重",
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 4, // 设置圆形标记的大小
        itemStyle: {
          normal: {
            color: '#F6E945', // 设置圆点的填充颜色
            borderColor: '#F6E945', // 设置圆点边框颜色
            // borderWidth: 2 // 设置圆点边框宽度
          }
        },
        areaStyle: { // 添加区域样式
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(246, 233, 69, 0.8)' // 渐变颜色，起始颜色
          }, {
            offset: 1,
            color: 'rgba(246, 233, 69, 0)' // 渐变颜色，结束颜色
          }])
        }
      },
      {
        data: options.heightList,
        type: 'line',
        name: "身高",
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 4, // 设置圆形标记的大小
        itemStyle: {
          normal: {
            color: '#38D7FF', // 设置圆点的填充颜色
            borderColor: '#38D7FF', // 设置圆点边框颜色
            // borderWidth: 2 // 设置圆点边框宽度
          }
        },
        areaStyle: { // 添加区域样式
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(56, 215, 255, 0.8)' // 渐变颜色，起始颜色
          }, {
            offset: 1,
            color: 'rgba(56, 215, 255, 0)' // 渐变颜色，结束颜色
          }])
        }
      }
    ]
  }
};