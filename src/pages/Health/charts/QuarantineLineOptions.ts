import * as echarts from 'echarts';

interface lineOptionsI {
  data: any
}

export const lineOptions = ({ data }: lineOptionsI) => (
  {
    tooltip: {
      trigger: 'axis'
    },
    grid:{ // 让图表占满容器
      top:"40px",
      left:"80px",
      right:"40px",
      bottom:"40px"
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        },
      }
    },
    yAxis: {
      type: 'value',
      name: '（只）',
      min: 0, // 设置纵坐标的最小值
      max: 3000, // 设置纵坐标的最大值
      interval: 500, // 设置纵坐标的间隔
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        },
      },
      splitLine: {
        lineStyle: {
          width: 0.5
        }
      }
    },
    legend: {
      data: ['检疫1'],
      textStyle: {
        color: "#fff"
      }
    },
    series: [
      {
        data: data,
        type: 'line',
        name: "检疫1",
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 8, // 设置圆形标记的大小
        itemStyle: {
          normal: {
            color: '#38D7FF', // 设置圆点的填充颜色
            // borderColor: '#38D7FF', // 设置圆点边框颜色
            // borderWidth: 2 // 设置圆点边框宽度
          }
        }
      }
    ]
  });