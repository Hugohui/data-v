import { isEmpty } from "@/utils/util"

export const scatterOptions = (options: any) => {
  const max = Math.max(...(options?.list?.map((item: any) => item?.value?.length_straight || 0))) || 20
  
  return {
    grid:{ // 让图表占满容器
      top:"60px",
      left:"60px",
      right:"60px",
      bottom:"40px"
    },
    tooltip: {
      trigger: 'item',
      formatter: (param: any) => {
        return `羊只编号：${param?.data?.[2]}<br />体长：${ isEmpty(param?.data?.[1]) ? '--' : param?.data?.[1] + 'cm' }`
      }
    },
    xAxis: {
      name: "月龄",
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        }
      },
      splitLine: {
        show: false
      },
    },
    yAxis: [
      {
        name: "体长\n(cm)",
        type: 'value',
        position: 'left',
        alignTicks: 'value',
        splitLine: {
          position: 'left',
          lineStyle: {
            width: 0.5
          }
        },
        max,
        interval: max / 5,
        axisLine: {
          onZero: false,
          show: false,
          lineStyle: {
            color: '#fff',
          }
        },
      }
    ],
    legend: {
      data: ['体长'],
      textStyle: {
        color: "#fff"
      }
    },
    series: [
      {
        symbolSize: 20,
        name: "体长",
        itemStyle: {
          color: "#38D7FF"
        },
        data: options?.list?.map((item:any) => [item.name, isEmpty(item?.value?.length_straight) ? 0 : item?.value?.length_straight, item?.value?.CowCode]),
        type: 'scatter'
      }
    ]
  }
};