import * as echarts from 'echarts';

export const milkTendencyBarOptions = (data: any) => (
  {
    grid:{ // 让图表占满容器
      ttop:"50px",
      left:"50px",
      right:"50px",
      bottom:"50px"
    },
    xAxis: {
      type: 'category',
      name: '月',
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
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
    yAxis: {
      type: 'value',
      name: '（kg）',
      min: 0, // 设置纵坐标的最小值
      max: 250, // 设置纵坐标的最大值
      interval: 50, // 设置纵坐标的间隔
      splitLine: false,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff',
        }
      },
      axisLabel: {
        fontSize: 14,
        fontWeight: 400
      }
    },
    series: [
      {
        data: data,
        type: 'bar',
        barWidth: 8,
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#5F31F4' },
            { offset: 1, color: '#993FE5' },
            
          ])
        },
      }
    ]
  }
);