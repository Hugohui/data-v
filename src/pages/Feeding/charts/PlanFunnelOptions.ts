import * as echarts from 'echarts';

export const funnelOptions = (data: any) => (
  {
    grid:{ // 让图表占满容器
      top:"10px",
      left:"50px",
      right:"40px",
      bottom:"40px"
    },
    series: [
      {
        name: 'Expected',
        type: 'funnel',
        sort: 'ascending',
        minSize: '0%',
        maxSize: 0,
        height: '90%',
        width: '50%',
        top: 'center',
        left: 'center',
        gap: 8,
        label: {
          position: "left",
          color: "#fff",
          formatter: '{b}',
          fontSize: 13
        },
        labelLine: {
          show: false,
          length: 280
        },
        itemStyle: {
          borderColor: null,
        },
        data: data
      },
      {
        name: 'Expected',
        type: 'funnel',
        shape: 'rect',
        sort: 'ascending',
        minSize: '0%',
        maxSize: 0,
        height: '90%',
        width: '50%',
        top: 'center',
        left: 'center',
        gap: 8,
        label: {
          position: "right",
          color: "#fff",
          formatter: (params: any) => {
            return `${params.percent}%`
          },
          fontSize: 13
        },
        labelLine: {
          show: false,
          length: 280
        },
        itemStyle: {
          borderColor: null,
        },
        data: data
      },
      {
        name: 'Expected',
        type: 'funnel',
        sort: 'ascending',
        gap: 8,
        height: '90%',
        width: '50%',
        top: 'center',
        left: 'center',
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
            borderColor: null,
        },
        data: data
      },
    ]
  });