export const sheePedigreeOptions = (options: any) => {
  const categories: any = []
  options?.DataList?.forEach(function (node: any, index: any) {
    node.label = {
      show: false
    }
    if (!categories.find((i: any) => i.name === node.category)) {
      categories.push({name: node.category})
    } 
  });
  return {
    tooltip: {},
    grid:{ // 让图表占满容器
      top:"30px",
      left:"80px",
      right:"40px",
      bottom:"20px"
    },
    color: ['#5B7CF7', '#BB62FF'],
    series: [
      {
        type: 'graph',
        legendHoverLink: false,
        layout: 'none',
        data: options.DataList,
        links: options.linksList,
        categories,
        roam: true,
        lineStyle: {
          color: 'source',
          curveness: 0.3
        },
      }
    ]
  }
};