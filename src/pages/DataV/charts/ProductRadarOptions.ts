import * as echarts from 'echarts';

export const radarOptions = (options: any) => (
  {
    tooltip: {
      trigger: 'axis'
    },
    radar: [
      {
        indicator: [
          { text: '空杯天数', max: 210 },
          { text: '单产', max: 1000 },
          { text: '羊羔成活率', max: 90 },
          { text: '初产天数', max: 390 },
          { text: '上料误差率', max: 5, min: -5 },
          { text: '平均泌乳天数', max: 270 }
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
            value: [
              options.EmptyDays, 
              options.perYield, 
              options.LambSurvivalRate, 
              options.DaysFirstLabor, 
              options.FeedingErroRate, 
              options.avgDriedDay
            ],
          }
        ]
      },
    ]
  }
);