export const scatterOptions = (options: any) => (
  {
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
      // data: options?.xAxisList?.map((item: any)=> Number(item)) || [],
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
      name: "体高\n(cm)",
      splitLine: false,
      // max: options.yAxisHaighHeight,
      max: 100,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff',
        }
      },
      },
    ],
    legend: {
      data: ['体高'],
      textStyle: {
        color: "#fff"
      }
    },
    series: [
      {
        symbolSize: 20,
        name: "体高",
        itemStyle:{
          color: '#38D7FF'
        },
        data: options?.list?.map((item:any) => [item.name, item?.value?.height || 0]),
        type: 'scatter'
      }
    ]
  }
);