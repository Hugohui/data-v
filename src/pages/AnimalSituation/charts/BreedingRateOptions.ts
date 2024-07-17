export const rateOptions = (options: any) => (
  {
    title: {
      text: options.title, // 标题文本
      left: 'center', // 水平位置，居中
      top: '72%', // 垂直位置
      textStyle: { // 文本样式
        color: '#FFF', // 文本颜色
        fontSize: 18, // 文本字体大小
      },
    },
    series: [
      {
        // 刻度盘
        type: 'gauge',
        radius: '75%',
        center: ['50%', '50%'],
        startAngle: 235,
        endAngle: -55,
        pointer: {
          show: false
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          // 刻度线
          show: false,
        },
        splitLine: {
          distance: -5,
          length: 12,
          lineStyle: {
            width: 2,
            color: (options.backgroundColor && options.backgroundColor[0]) || '#3B2B66',
          }
        },
        axisLabel: {
          show: false
        },
        detail: {
          backgroundColor: '#566CFF',
          width: "50%",
          height: 0,
          borderRadius: 2,
          offsetCenter: [0, '75%'],
          fontSize: 0,
          formatter: '', // %文字大小调整
          color: '#566CFF',
          padding: [2, 0]
        },
        data: [
          {},
        ]
      },
      {
        // 刻度盘
        type: 'gauge',
        radius: '75%',
        center: ['50%', '50%'],
        startAngle: 225,
        endAngle: -45,
        min: 0,
        max: 100,
        pointer: {
          show: false
        },
        axisLine: {
          show: false,
          // lineStyle: {
          //   width: 1,
          //   color: [[1, '#3B2B66']]
          // }
        },
        axisTick: {
          // 刻度线
          distance: -15,
          splitNumber: 6,
          lineStyle: {
            width: 2,
            color: (options.backgroundColor && options.backgroundColor[0]) || '#3B2B66',
            type: 'circle',
          }
        },
        splitLine: {
          distance: -20,
          length: 9,
          lineStyle: {
            width: 4,
            color: (options.backgroundColor && options.backgroundColor[0]) || '#3B2B66',
          }
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        }
      },
      {
        // 进度条仪表盘
        type: 'gauge',
        radius: '71.3%',
        // center: ['50%', '50%'],
        startAngle: 225,
        endAngle: -45,
        min: 0,
        max: 100,
        splitNumber: 12,
        progress: {
          // 进度条
          show: true,
          roundCap: true,
          width: 15,
          itemStyle: {
            color: {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 1,
                  color: (options.backgroundColor && options.backgroundColor[1]) || '#576BFF' // 0% 处的颜色
                },
                {
                  offset: 0,
                  color: (options.backgroundColor && options.backgroundColor[2]) || '#A529FF' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          }
        },
        pointer: {
          //仪表盘指针
          show: false,
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 15,
            color: [[1, (options.backgroundColor && options.backgroundColor[0]) || '#3B2B66']] // 圆环底色
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          width: '60%',
          borderRadius: 8,
          offsetCenter: [0, 0],
          fontSize: 22,
          fontFamily: 'Pixel LCD7',
          fontWeight: 'bolder',
          formatter: (value: any) => {
            if (!value) return '--'
            return `${value}${options.unit}`
          },
          color: '#fff'
        },
        data: [
          {
            value: options.value
          },
        ]
      },
    ]
  }
);