import * as echarts from 'echarts';

export const barOptions = (data: any) => (
  {
    grid:{ // 让图表占满容器
      top:"40px",
      left:"60px",
      right:"30px",
      bottom:"40px"
    },
    tooltip: {
      trigger: 'axis',
    },
    dataZoom: [
      {
        type: 'slider',
        realtime: true,
        start: 0,
        end: 30,
        height: 40
      }
    ],
    xAxis: {
      type: 'category',
      data: data?.map((item: any) => item.name),
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        fontSize: 14,
        fontWeight: 400,
        rotate: -45,
        overflow: 'hidden'
      }
    },
    yAxis: {
      type: 'value',
      name: '吨',
      min: 0, // 设置纵坐标的最小值
      max: 3000, // 设置纵坐标的最大值
      interval: 500, // 设置纵坐标的间隔
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
        large: true,
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#19FCDE' },
            { offset: 1, color: '#19FCDE' },
            
          ])
        }
      }
    ]
  }
);