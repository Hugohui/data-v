export const scatterOptions = (options: any) => {
  return {
    grid:{ // 让图表占满容器
      top:"60px",
      left:"60px",
      right:"60px",
      bottom:"40px"
    },
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      name: "月龄",
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        }
      },
      splitLine: {
        show: false
      },
    },
    yAxis: [
      {
        name: "体重\n(kg)",
        type: 'value',
        position: 'left',
        alignTicks: 'value',
        splitLine: {
          position: 'left',
          lineStyle: {
            width: 0.5
          }
        },
        max: options.yAxisHaighWeight || 330,
        axisLine: {
          onZero: false,
          show: false,
          lineStyle: {
            color: '#fff',
          }
        },
      }
    ],
    legend: {
      data: ['体重'],
      textStyle: {
        color: "#fff"
      }
    },
    series: [
      {
        symbolSize: 20,
        name: "体重",
        itemStyle: {
          color: "#FF697E"
        },
        data: options?.list?.map((item:any) => [item.name, item?.value?.weight || 0]),
        type: 'scatter'
      }
    ]
  }
};