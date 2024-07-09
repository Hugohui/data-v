import * as echarts from 'echarts';

export const lineOptions = (data: any) => (
  {
    tooltip: {
      trigger: 'axis'
    },
    grid:{ // 让图表占满容器
      top:"30px",
      left:"50px",
      right:"30px",
      bottom:"30px"
    },
    xAxis: {
      type: 'category',
      data: data?.list?.map((item: any) => item.name),
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        },
      }
    },
    yAxis: {
      type: 'value',
      // name: '%',
      min: 0, // 设置纵坐标的最小值
      max: 2000, // 设置纵坐标的最大值
      interval: 500, // 设置纵坐标的间隔
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        },
      },
      splitLine: {
        show: false,
        // lineStyle: {
        //   width: 0.5
        // }
      }
    },
    series: [
      {
        data: data?.list?.map((item: any) => item.value),
        type: 'line',
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 4, // 设置圆形标记的大小
        itemStyle: {
          normal: {
            color: '#65E752', // 设置圆点的填充颜色
            borderColor: '#65E752', // 设置圆点边框颜色
            // borderWidth: 2 // 设置圆点边框宽度
          }
        },
        areaStyle: { // 添加区域样式
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(101, 231, 82, 0.8)' // 渐变颜色，起始颜色
          }, {
            offset: 1,
            color: 'rgba(101, 231, 82, 0)' // 渐变颜色，结束颜色
          }])
        }
      }
    ]
  });