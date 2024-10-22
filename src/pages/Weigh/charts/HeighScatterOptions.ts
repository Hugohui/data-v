export const scatterOptions = (options: any) => {
  return {
    grid: { // 让图表占满容器
      top: "60px",
      left: "60px",
      right: "60px",
      bottom: "40px"
    },
    tooltip: {
      trigger: 'item',
      formatter: (param: any) => {
        return `体高<br />${param?.data?.[2]}: ${param?.data?.[1]} cm`
      }
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
        name: "体高\n(cm)",
        splitLine: false,
        max: options.yAxisHaighHeight,
        position: 'left',
        axisLine: {
          onZero: false,
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
        itemStyle: {
          color: '#38D7FF'
        },
        data: options?.list?.map((item: any) => [item.name, item?.value?.height || 0, item?.value?.CowCode]),
        type: 'scatter'
      }
    ]
  }
};