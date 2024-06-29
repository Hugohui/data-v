import * as echarts from 'echarts';

export const barOptions = (data: any) => (
  {
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"30px",
      bottom:"40px"
    },
    xAxis: {
      type: 'category',
      // name: '月',
      data: ['饲料1', '饲料2', '饲料3', '饲料4', '饲料5', '饲料6', '饲料7', '饲料8', '饲料9', '饲料10'],
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        fontSize: 14,
        fontWeight: 400,
        rotate: -45
      }
    },
    yAxis: {
      type: 'value',
      // name: '（kg）',
      min: 0, // 设置纵坐标的最小值
      max: 50, // 设置纵坐标的最大值
      interval: 10, // 设置纵坐标的间隔
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
        barWidth: 12,
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#19FCDE' },
            { offset: 1, color: '#19FCDE' },
            
          ])
        },
      }
    ]
  }
);