import * as echarts from 'echarts';

export const barOptions = (options: any) => {
  const xAxis = options?.gtMilkList?.map((item:any) => item.name)
  const sheepData = [...(options?.gtMilkList || []), ...(options?.ltMilkList || [])]?.map((item: any) => item.value || 0)
  const maxSheepNum = Math.max(...sheepData)
  const maxYeild = Math.max(...((options?.avgMilkLists || [])?.map((item: any) => item.value)))
  return {
    tooltip: {
      trigger: 'axis'
    },
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"80px",
      bottom:"40px"
    },
    legend: {
      data: ['低于', '高于', '平均产奶量'],
      textStyle: {
        color: '#fff'
      }
    },
    xAxis: {
      type: 'category',
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
    yAxis: [
      {
        type: 'value',
        name: '养只数（只）',
        min: 0, // 设置纵坐标的最小值
        max: maxSheepNum,
        interval: Math.ceil(maxSheepNum / 5),
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
      {
        type: 'value',
        name: '平均奶量(Kg)',
        min: 0, // 设置纵坐标的最小值
        max: maxYeild,
        interval: maxYeild / 5,
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
      }
    ],
    series: [
      {
        name: '低于',
        data: options.ltMilkList,
        yAxisIndex: 0,
        type: 'bar',
        barWidth: 14,
        itemStyle: {
          borderRadius: [2, 2, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#FCF366' },
            { offset: 1, color: '#FEC324' },
          ])
        },
      },
      {
        name: '高于',
        data: options.gtMilkList,
        yAxisIndex: 0,
        type: 'bar',
        barWidth: 14,
        itemStyle: {
          borderRadius: [2, 2, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#993FE5' },
            { offset: 1, color: '#5F31F4' },
          ])
        },
      },
      {
        name: '平均产奶量',
        data: options.avgMilkLists,
        yAxisIndex: 1,
        type: 'line',
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 8, // 设置圆形标记的大小
        itemStyle: {
          normal: {
            color: '#38D7FF', // 设置圆点的填充颜色
            borderColor: '#38D7FF', // 设置圆点边框颜色
          }
        }
      },
    ]
  }
};