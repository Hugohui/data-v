import * as echarts from 'echarts';

export const barOptions = (data: any) => (
  {
    tooltip: {
      trigger: 'axis'
    },
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"50px",
      bottom:"40px"
    },
    xAxis: {
      type: 'category',
      name: '日',
      data: data?.map((item: any) => item.name),
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
      // splitLine: false,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff',
        }
      },
      axisLabel: {
        fontSize: 14,
        fontWeight: 400
      },
      splitLine: {
        lineStyle: {
          width: 0.5
        }
      }
    },
    series: [
      {
        data: data,
        type: 'bar',
        barWidth: 14,
        itemStyle: {
          borderRadius: [2, 2, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#4EC1FF' },
            { offset: 1, color: '#2491FE' },
          ])
        },
      }
    ]
  }
);