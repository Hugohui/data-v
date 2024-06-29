export const scatterOptions = (options: any) => (
  {
    grid:{ // 让图表占满容器
      top:"60px",
      left:"60px",
      right:"60px",
      bottom:"40px"
    },
    xAxis: {
      name: "月龄",
      data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        }
      },
    },
    yAxis: [
      {
      name: "体高\n(cm)",
      // splitLine: false,
      max: 100,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff',
        }
      }
      },
      {
        name: "体重\n(kg)",
        type: 'value',
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
        data: [
          [10.0, 80],
          [8.07, 69],
          [13.0, 75],
          [9.05, 81],
          [11.0, 33],
          [14.0, 66],
          [13.4, 81],
          [10.0, 33],
          [14.0, 96],
        ],
        type: 'scatter'
      },
      {
        symbolSize: 20,
        name: "体重",
        yAxisIndex: 1,
        itemStyle: {
          color: "#FF697E"
        },
        data: [
          [1, 40],
          [3, 60],
          [10, 50],
          [5, 48],
          [1, 35],
          [14, 76],
          [13, 87],
          [14, 38],
          [11, 68],
          [4, 89],
        ],
        type: 'scatter'
      }
    ]
  }
);