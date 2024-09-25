export const sheePedigreeOptions = (options: any, rangeOption: any = {}) => {
  const categories: any = []
  options?.nodes?.forEach(function (node: any, index: any) {
    node.label = {
      show: false,
      color: "#fffff"
    }
    if (!categories.find((i: any) => i.name === node.category)) {
      categories.push({name: node.category})
    } 
  });

  // 计算节点位置
  function calculatePositions(
    radius: any, 
    center1: any, 
    center2: any, 
    center3: any, 
    center4: any, 
    dataList: any
  ) {
    var tempNodes: any = [];
    let color = ''

    for (var i = 0; i < dataList?.length; i++) {
        let pos;
        let angle = Math.random() * 2 * Math.PI;
        let radiusScale = Math.sqrt(Math.random());
        if (dataList[i].category === '当代') {
          let r = radius * radiusScale;
          pos = [
              center1[0] + r * Math.cos(angle),
              center1[1] + r * Math.sin(angle)
          ];
          color = '#39eae0'
        } else if (dataList[i].category === '父辈') {
          let r = radius * radiusScale;
          pos = [
              center2[0] + r * Math.cos(angle),
              center2[1] + r * Math.sin(angle)
          ];
          color = '#6bd25e'
        } else if (dataList[i].category === '祖辈') {
          let r = radius * radiusScale;
          pos = [
              center3[0] + r * Math.cos(angle),
              center3[1] + r * Math.sin(angle)
          ];
          color = '#eade39'
        } else {
            let r = radius * radiusScale;
            pos = [
                center4[0] + r * Math.cos(angle),
                center4[1] + r * Math.sin(angle)
            ];
            color = '#5b7cf7'
        }
        if (!tempNodes.find((item: any) => item.id === dataList[i].id)) {
            tempNodes.push({
              id: dataList[i].id,
              category: dataList[i].category,
              name: dataList[i].name,
              value: dataList[i].value,
              symbolSize: dataList[i].symbolSize,
              itemStyle: {
                color,
                borderColor: color
              },
              // x: pos[0],
              // y: pos[1]
          });
        }
        
    }
    return tempNodes;
  }


  // 设置两个圆的中心点和半径
  var center1 = [0, 0];
  var center2 = [400, 0];
  var center3 = [0, 400];
  var center4 = [400, 400];
  var radius = 500;
  
  const nodes = calculatePositions(
    rangeOption?.radius || radius,
    rangeOption?.center1 || center1,
    rangeOption?.center2 || center2,
    rangeOption?.center3 || center3,
    rangeOption?.center4 || center4,
    options?.nodes);

  return {
    tooltip: {
      backgroundColor: '#123348',
      borderColor: "#00DDEA",
      textStyle: {
        color: "#fff"
      },
    },
    grid:{ // 让图表占满容器
      top: "0px",
      left: "0px",
      right: "0px",
      bottom: "0px"
    },
    series: [
      {
        type: 'graph',
        legendHoverLink: false,
        layout: 'force',
        data: nodes,
        links: options?.linksList,
        categories,
        roam: true,
        itemStyle: {
          opacity: 0.5
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3,
          opacity: 0.5,
          // width: 2
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 8,
            opacity: 1,
          },
          labelStyle: {
            color: 'red'
          },
          itemStyle: {
            // color: 'red'
            // opacity: 1
           },
           edgeLabel: {
            // show: true
           }
        },
        force: {
          repulsion: 30,
          edgeLength: 30,
          gravity: 0.15
        }
      }
    ]
  }
};