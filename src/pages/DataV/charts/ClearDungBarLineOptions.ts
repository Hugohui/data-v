import * as echarts from 'echarts';

export const barOptions = (options: any) => {
  return {
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
        data: options?.xAxisList
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
        data: options?.xAxisList
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        max: options?.MaxyAxisTimes,
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
        max: options?.MaxyAxisTotalTime,
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
        data: options?.ManureRemovalTimesList,
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
        data: options?.ManureRemovalTotalTimeList,
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
};