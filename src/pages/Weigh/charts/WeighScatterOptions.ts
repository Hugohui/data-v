export const scatterOptions = (options: any) => (
  {
    grid:{ // 让图表占满容器
      top:"60px",
      left:"60px",
      right:"60px",
      bottom:"40px"
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      name: "月龄",
      data: options.xAxisList,
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
      max: 100,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff',
        }
      },
      },
      {
        name: "体重\n(kg)",
        type: 'value',
        // splitLine: false,
        splitLine: {
          lineStyle: {
            width: 0.5
          }
        },
        max: 100,
        // offset: 10,
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff',
          }
        },
      }
    ],
    legend: {
      data: ['体高', '体重'],
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
        data: options?.list[0]?.value?.map((item:any) => [item.weight, item.height]),
        type: 'scatter'
      },
      {
        symbolSize: 20,
        name: "体重",
        yAxisIndex: 1,
        itemStyle: {
          color: "#FF697E"
        },
        data: options?.list[1]?.value?.map((item:any) => [item.weight, item.height]),
        type: 'scatter'
      }
    ]
  }
);