import * as echarts from 'echarts';

export const lineOptions = (data: any) => (
  {
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"30px",
      bottom:"30px"
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      textStyle: {
        color: "#FFF"
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false // 确保这里是true
        },
        axisLabel: {
          show: true // 确保这里是true
        },
        data: ['11', '12', '13', '14', '15']
      },
      {
        type: 'category',
        boundaryGap: true,
        axisTick: {
          show: false // 确保这里是true
        },
        axisLabel: {
          show: false // 确保这里是true
        },
        data: ['11', '12', '13', '14', '15']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: "温度",
        scale: true,
        max: 50,
        min: 0,
        boundaryGap: [0.2, 0.2],
        splitLine: false,
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        
      },
      {
        type: 'value',
        name: "湿度",
        scale: true,
        max: 50,
        min: 0,
        boundaryGap: [0.2, 0.2],
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
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
        name: '温度',
        type: 'line',
        data: [30, 32, 43, 14, 34, 40],
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 8, // 设置圆形标记的大小
        itemStyle: {
          normal: {
            color: '#F9FC24', // 设置圆点的填充颜色
            // borderColor: '#F9FC24', // 设置圆点边框颜色
            // borderWidth: 3 // 设置圆点边框宽度
          }
        },
        areaStyle: { // 添加区域样式
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(249, 252, 36, 0.8)' // 渐变颜色，起始颜色
          }, {
            offset: 1,
            color: 'rgba(249, 252, 36, 0)' // 渐变颜色，结束颜色
          }])
        }
      },
      {
        name: '湿度',
        type: 'line',
        data: [12, 3, 4, 12, 14, 10],
        xAxisIndex: 1,
        yAxisIndex: 1,
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 8, // 设置圆形标记的大小
        itemStyle: {
          normal: {
            color: '#6BD25E', // 设置圆点的填充颜色
            // borderColor: '#6BD25E', // 设置圆点边框颜色
            // borderWidth: 3 // 设置圆点边框宽度
          }
        },
        areaStyle: { // 添加区域样式
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(107, 210, 94, 0.8)' // 渐变颜色，起始颜色
          }, {
            offset: 1,
            color: 'rgba(107, 210, 94, 0)' // 渐变颜色，结束颜色
          }])
        }
      }
    ]
  }
);