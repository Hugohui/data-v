export const candlestickOptions = (options: any) => (
  {
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"50px",
      bottom:"40px"
    },
    tooltip: {
      trigger: 'axis'
    },
    // dataset: [
    //   {
    //     // prettier-ignore
    //     source: options.source
    //   },
    //   {
    //     transform: {
    //       type: 'boxplot'
    //     }
    //   },
    //   {
    //     fromDatasetIndex: 1,
    //     fromTransformResult: 1
    //   }
    // ],
    xAxis: {
      type: 'category',
      name: "月",
      // min: 0,
      // max: 12,
      data: options.xAxisList,
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        }
      },
    },
    yAxis: {
      type: 'value',
      name: 'kg',
      min: 0,
      max: 500,
      splitLine: false,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff'
        }
      },
    },
    series: [
      {
        name: "体重分布",
        type: 'boxplot',
        datasetIndex: 1,
        itemStyle: {
          color: '#108DF4',
          color0: '#108DF4',
          borderColor: '#1DF0BC',
          borderColor0: '#54ea92',
          borderColorDoji: null,
        },
        data: options.list,
      }
    ]
  }
);