export const ratioOptions = (data: any) => (
  {
    series: [
      {
        name: 'KeepRatio',
        type: 'pie',
        radius: ['40%', '70%'],
        label: {
          normal: {
            show: true,
            position: 'outside',
            formatter: '{b}\n {d}%',
            orient: 'vertical', // 设置标签文字从上到下排列
            textStyle: {
              fontSize: 16,
              color: '#FDFDFD'
            }
          }
        },
        labelLine: {
          normal: {
            show: true,
            length: 20,
            length2: 50,
            lineStyle: {
              width: 1,
            }
          }
        },
        data
      }
    ]
  });