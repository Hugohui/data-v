export const scatterOptions = (options: any) => {
  console.log(Math.min(options?.xAxisList?.map((item: any) => Number(item)) || []));
  
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
        name: "体长\n(cm)",
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
      data: ['体长'],
      textStyle: {
        color: "#fff"
      }
    },
    series: [
      {
        symbolSize: 20,
        name: "体长",
        itemStyle: {
          color: "#38D7FF"
        },
        data: options?.list?.map((item:any) => [item.name, item?.value?.weight || 0]),
        type: 'scatter'
      }
    ]
  }
};