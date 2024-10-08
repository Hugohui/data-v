import * as echarts from 'echarts';

export const lineOptions = (options: any) => {
  const max = Math.ceil(options.max / 100) * 100
  return {
    grid:{ // 让图表占满容器
      top:"40px",
      left:"80px",
      right:"40px",
      bottom:"40px"
    },
    xAxis: {
      type: 'category',
      name: '月',
      data: options.xAxislist,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        },
      }
    },
    yAxis: {
      type: 'value',
      name: '只',
      min: 0, // 设置纵坐标的最小值
      max: options.max || max, // 设置纵坐标的最大值
      // interval: max / 5, // 设置纵坐标的间隔
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
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: options.legendData,
      textStyle: {
        color: "#fff"
      }
    },
    series: Object.keys(options.data).map((item) => {
      return {
        data: options.data[item],
        type: 'bar',
        name: item,
        // symbol: 'circle', // 设置标记为圆形
        // symbolSize: 8, // 设置圆形标记的大小
        barWidth: 26,
        itemStyle: {
          borderRadius: [8, 8, 0, 0],
        }
        // itemStyle: {
        //   normal: {
        //     color: '#38D7FF', // 设置圆点的填充颜色
        //     // borderColor: '#38D7FF', // 设置圆点边框颜色
        //     // borderWidth: 2 // 设置圆点边框宽度
        //   }
        // }
      }
    })
    // [
    //   {
    //     data: data,
    //     type: 'line',
    //     name: "免疫一",
    //     stack: 'Total',
    //     symbol: 'circle', // 设置标记为圆形
    //     symbolSize: 8, // 设置圆形标记的大小
    //     itemStyle: {
    //       normal: {
    //         color: '#6BD25E', // 设置圆点的填充颜色
    //         borderColor: '#6BD25E', // 设置圆点边框颜色
    //         // borderWidth: 2 // 设置圆点边框宽度
    //       }
    //     },
    //   }
    // ]
  }
};