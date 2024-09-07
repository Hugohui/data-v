export const candlestickOptions = (options: any) => {
  const source = options?.list?.map((item: any) => item.value) || []
  return {
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"50px",
      bottom:"40px"
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params: any) {
        var data = params[0]?.data;
        return '最大值: ' + data[1] + '<br/>' +
               '中位数: ' + data[3] + '<br/>' +
               '最小值: ' + data[5];
    }
    },
    dataset: [
      {
        // prettier-ignore
        source
      },
      {
        transform: {
          type: 'boxplot',
          config:{ 
            itemNameFormatter: (params: any) => {
              return options?.xAxisList[params.value]
            }
          }
        }
      },
      {
        fromDatasetIndex: 1,
        fromTransformResult: 1
      }
    ],
    xAxis: {
      type: 'category',
      name: "月",
      // min: 0,
      // max: 12,
      // data: options.xAxisList,
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
      max: 10,
      splitLine: false,
      axisLine: {
        show: true,
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
      },
      {
        name: "outlier",
        type: "scatter",
        datasetIndex: 2
      }
    ]
  }
};