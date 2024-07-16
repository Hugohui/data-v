import * as echarts from 'echarts';

export const feedErrorRateLineOptions = (options: any) => (
  {
    tooltip: {
      trigger: 'axis'
    },
    grid:{ // 让图表占满容器
      top:"40px",
      left:"50px",
      right:"40px",
      bottom:"40px"
    },
    xAxis: {
      type: 'category',
      data: options?.FeedingErroRatelist?.map((item: any) => item.shift),
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        },
      }
    },
    yAxis: {
      type: 'value',
      name: '%',
      min: options?.upyMinAxis || -100, // 设置纵坐标的最小值
      max: options?.upyMaxAxis || 100, // 设置纵坐标的最大值
      // interval: 50, // 设置纵坐标的间隔
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
    series: [
      {
        data: options?.FeedingErroRatelist?.map((item: any) => item.ErroRate),
        type: 'line',
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 4, // 设置圆形标记的大小
        itemStyle: {
          normal: {
            color: '#FF9B24', // 设置圆点的填充颜色
            borderColor: '#FF9B24', // 设置圆点边框颜色
            // borderWidth: 2 // 设置圆点边框宽度
          }
        },
        areaStyle: { // 添加区域样式
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255, 155, 36, 0.8)' // 渐变颜色，起始颜色
          }, {
            offset: 1,
            color: 'rgba(255, 155, 36, 0)' // 渐变颜色，结束颜色
          }])
        }
      }
    ]
  });