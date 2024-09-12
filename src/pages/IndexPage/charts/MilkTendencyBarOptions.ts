import * as echarts from 'echarts';

export const milkTendencyBarOptions = (options: any) => {
  const dayOutput = options?.ListData?.map((item: any) => item.dayOutput || 0) || []
  const average = options?.ListData?.map((item: any) => item.average || 0) || []

  const max = Math.ceil(Math.max(...dayOutput) / 100) * 100
  const maxAvg = Math.ceil(Math.max(...average) / 100) * 100

  return {
    grid: { // 让图表占满容器
      top: "30px",
      left: "80px",
      right: "50px",
      bottom: "20px"
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      name: '（日）',
      data: options.xAxisList,
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
    yAxis: [{
      type: 'value',
      name: 'kg',
      min: 0, // 设置纵坐标的最小值
      max: max, // 设置纵坐标的最大值
      interval: max / 5, // 设置纵坐标的间隔
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
    {
      type: 'value',
      name: 'kg',
      scale: true,
      min: 0, // 设置纵坐标的最小值
      max: maxAvg, // 设置纵坐标的最大值
      interval: maxAvg / 5, // 设置纵坐标的间隔
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        // 使用 formatter 函数格式化标签
        formatter: function (value: any) {
          // 当值为 0 时返回空字符串，否则返回原值
          return value === 0 ? '' : value;
        }
      },
      splitLine: {
        lineStyle: {
          width: 0.5
        }
      }
    }
    ],
    series: [
      {
        data: dayOutput,
        type: 'bar',
        barWidth: 8,
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#5F31F4' },
            { offset: 1, color: '#993FE5' },

          ])
        },
      },
      {
        data: average,
        type: 'line',
        barWidth: 8,
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 4, // 设置圆形标记的大小
        itemStyle: {
          normal: {
            color: '#38D7FF', // 设置圆点的填充颜色
            borderColor: '#38D7FF', // 设置圆点边框颜色
            // borderWidth: 2 // 设置圆点边框宽度
          }
        }
      }
    ]
  }
};