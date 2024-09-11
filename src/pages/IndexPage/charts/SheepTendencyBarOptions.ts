import * as echarts from 'echarts';

export const sheepTendencyBarOptions = (options: any) => {
  const typeData = options?.ListData?.[0]?.typeData;

  const series: any = []
  typeData?.forEach((item: any) => {
    const data: any = []
    options?.ListData?.forEach((i: any) => {
      data.push(i?.typeData?.find((t: any) => t.typeName === item.typeName)?.SheepCount)
    })
    series.push({
      name: item.typeName,
      type: 'bar',
      stack: 'total',
      barWidth: 8,
      data
    })
  });

  return {
    grid:{ // 让图表占满容器
      top:"30px",
      left:"50px",
      right:"50px",
      bottom:"20px"
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      name: '月',
      data: options?.xAxisList,
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
      name: '只',
      min: 0, // 设置纵坐标的最小值
      max: options?.yAxis, // 设置纵坐标的最大值
      interval: Math.round(options?.yAxis / 5), // 设置纵坐标的间隔
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
    series
    // [
    //   {
    //     data,
    //     type: 'bar',
    //     barWidth: 8,
    //     itemStyle: {
    //       borderRadius: [4, 4, 0, 0],
    //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //         { offset: 0, color: '#F4DF31' },
    //         { offset: 1, color: '#E5DB3F' },
    //       ])
    //     },
    //   }
    // ]
  }
};