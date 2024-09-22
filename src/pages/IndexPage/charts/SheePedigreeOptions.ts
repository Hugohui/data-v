export const sheePedigreeOptions = (options: any, rangeOption: any = {}) => {
  const categories: any = []
  options?.DataList?.forEach(function (node: any, index: any) {
    node.label = {
      show: false
    }
    if (!categories.find((i: any) => i.name === node.category)) {
      categories.push({name: node.category})
    } 
  });

  // 计算节点位置
  function calculatePositions(center1: any, radius1: any, center2: any, radius2: any, dataList: any) {
    var nodes = [];
    let color = ''

    for (var i = 0; i < dataList?.length; i++) {
        let pos;
        let angle = Math.random() * 2 * Math.PI;
        let radiusScale = Math.sqrt(Math.random());

        if (dataList[i].category === '公') {
          let r = radius1 * radiusScale;
            pos = [
                center1[0] + r * Math.cos(angle),
                center1[1] + r * Math.sin(angle)
            ];
            color = '#5B7CF7'
        } else {
            let r = radius1 * radiusScale;
            pos = [
                center2[0] + r * Math.cos(angle),
                center2[1] + r * Math.sin(angle)
            ];
            color = '#BB62FF'
        }
        nodes.push({
            name: dataList[i].name,
            value: dataList[i].value,
            itemStyle: {
              color
            },
            x: pos[0],
            y: pos[1]
        });
    }
    return nodes;
  }


  // 设置两个圆的中心点和半径
  var center1 = [100, 100];
  var center2 = [400, 400];
  var radius1 = 200;
  var radius2 = 200;
  
  const nodes = calculatePositions(
    rangeOption?.center1 || center1, 
    rangeOption?.radius1 || radius1, 
    rangeOption?.center2 || center2, 
    rangeOption?.radius2 || radius2, 
    options?.DataList);

  return {
    tooltip: {},
    grid:{ // 让图表占满容器
      top:"30px",
      left:"80px",
      right:"40px",
      bottom:"20px"
    },
    series: [
      {
        type: 'graph',
        legendHoverLink: false,
        layout: 'none',
        data: nodes,
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