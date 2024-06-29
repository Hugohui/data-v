export const candlestickOptions = (options: any) => (
  {
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"50px",
      bottom:"40px"
    },
    xAxis: {
      name: "（月）",
      axisLine: {
          show: true,
          lineStyle: {
            color: '#fff',
          }
        },
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
    yAxis: {
      name: '(kg)',
      splitLine: false,
      axisLine: {
          show: true,
          lineStyle: {
            color: '#fff',
          }
        },
    },
    series: [
      {
        type: 'candlestick',
        itemStyle: {
          color: '#108DF4',
          color0: '#108DF4',
          borderColor: '#1DF0BC',
          borderColor0: '#54ea92',
          borderColorDoji: null,
        },
        data: [
          [3, 5, 2, 6],
          [20, 50, 18, 52],
          [13, 34, 10, 35],
          [40, 60, 38, 65],
          [44, 56, 30, 57],
          [14, 46, 10, 49],
        ]
      }
    ]
  }
);