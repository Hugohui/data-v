import * as echarts from 'echarts';

export const radarOptions = (options: any) => (
  {
    tooltip: {
      trigger: 'axis'
    },
    radar: [
      {
        indicator: [
          { text: '空杯天数', max: options.EmptyDays },
          { text: '单产', max: options.perYield },
          { text: '羊羔成活率', max: options.LambSurvivalRate },
          { text: '初产天数', max: options.DaysFirstLabor },
          { text: '上料误差率', max: options.FeedingErroRate },
          { text: '平均泌乳天数', max: options.avgDriedDay }
        ],
        radius: 60,
        splitNumber: 5,
        axisLine: {
          show: false,
        },
        axisName: {
          color: '#FFF',
          fontSize: 13
        },
        splitArea: {
          areaStyle: {
            color: "interval"
          }
        },
        splitLine: {
          lineStyle: {
            color: '#1BCCA5',
            width: 2,
          }
        }
      },
    ],
    series: [
      {
        type: 'radar',
        name: "生产性能",
        tooltip: {
          trigger: 'item'
        },
        areaStyle: {
          opacity: 0.9,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#917532' },
              { offset: 1, color: '#98903B' },
  
            ])
        },
        symbol: 'circle', // 设置标记为圆形
        symbolSize: 8, 
         itemStyle: {
          normal: {
            color: '#FFF', // 设置圆点的填充颜色
            borderColor: '#00F67F', // 设置圆点边框颜色
            borderWidth: 2 // 设置圆点边框宽度
          }
        },
        data: [
          {
            value: [60, 73, 85, 40, 30, 90],
          }
        ]
      },
    ]
  }
);