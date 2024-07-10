import * as echarts from 'echarts';

export const feedUsageOptions = (options: any) => (
  {
    tooltip: {
      trigger: 'axis'
    },
    grid:{ // 让图表占满容器
      top:"30px",
      left:"80px",
      right:"40px",
      bottom:"20px"
    },
    xAxis: {
      type: 'category',
      data: options?.ListData?.map((item: any) => item.name),
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        },
      }
    },
    yAxis: {
      type: 'value',
      name: "吨",
      min: 0, // 设置纵坐标的最小值
      max: options.maxWeight, // 设置纵坐标的最大值
      interval: options.maxWeight / 5, // 设置纵坐标的间隔
      axisLine: {
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
    series: [
      {
        data: options?.ListData?.map((item: any) => item.value || 0),
        type: 'line',
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 4, // 设置圆形标记的大小
        itemStyle: {
          normal: {
            color: '#38D7FF', // 设置圆点的填充颜色
            borderColor: '#38D7FF', // 设置圆点边框颜色
            // borderWidth: 2 // 设置圆点边框宽度
          }
        },
        areaStyle: { // 添加区域样式
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(56, 215, 255, 0.8)' // 渐变颜色，起始颜色
          }, {
            offset: 1,
            color: 'rgba(56, 215, 255, 0)' // 渐变颜色，结束颜色
          }])
        }
      }
    ]
  });