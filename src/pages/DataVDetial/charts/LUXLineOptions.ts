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
    ],
    yAxis: [
      {
        type: 'value',
        name: "LUX",
        // scale: true,
        max: 2500,
        min: 0,
        // boundaryGap: [0.2, 0.2],
        splitLine: false,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff'
          }
        },
        
      }
    ],
    series: [
      {
        type: 'line',
        data: [200, 200, 1050, 800, 700, 1001],
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 8, // 设置圆形标记的大小
        itemStyle: {
          normal: {
            color: '#FF9B24', // 设置圆点的填充颜色
            // borderColor: '#377EFF', // 设置圆点边框颜色
            // borderWidth: 3 // 设置圆点边框宽度
          }
        },
        areaStyle: { // 添加区域样式
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255, 155, 36, 0.8)' // 渐变颜色，起始颜色
          }, {
            offset: 1,
            color: 'rgba(255, 155, 36, 0)' // 渐变颜色，结束颜色
          }])
        }
      }
    ]
  }
);