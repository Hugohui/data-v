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
        name: "°C",
        // scale: true,
        max: 35,
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
        name: '温度',
        type: 'line',
        data: [20, 20, 15, 8, 7, 11],
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 8, // 设置圆形标记的大小
        itemStyle: {
          normal: {
            color: '#377EFF', // 设置圆点的填充颜色
            // borderColor: '#377EFF', // 设置圆点边框颜色
            // borderWidth: 3 // 设置圆点边框宽度
          }
        }
      }
    ]
  }
);