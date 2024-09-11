import * as echarts from 'echarts';

export const barOptions = (data: any) => (
  {
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"30px",
      bottom:"40px"
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
        boundaryGap: [0, 0.01],
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
        data: ['基础母羊舍', '泌乳2舍', '泌乳3舍', '泌乳4舍', '泌乳5舍']
      },
      {
        type: 'category',
        boundaryGap: [0, 0.01],
        axisTick: {
          show: false // 确保这里是true
        },
        axisLabel: {
          show: false // 确保这里是true
        },
        data: ['基础母羊舍', '泌乳2舍', '泌乳3舍', '泌乳4舍', '泌乳5舍']
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        max: 250,
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
        scale: true,
        max: 20,
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
        name: '清粪次数',
        type: 'bar',
        data: [120, 23, 45, 230, 256, 456],
        barWidth: 15,
        itemStyle: {
          borderRadius: [1, 1, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#FFCA2B' },
            { offset: 1, color: '#E5E04F' },
          ])
        },
      },
      {
        name: '总用时',
        type: 'bar',
        data: [12, 3, 4, 12, 14, 10],
        barWidth: 15,
        itemStyle: {
          borderRadius: [1, 1, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#E34768' },
            { offset: 1, color: '#A34768' },
          ])
        },
      }
    ]
  }
);