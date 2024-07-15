import indexPageBg from '@/assets/img/mapBg.png';
let img = document.createElement('img')
img.src = indexPageBg

var provinceCenter = {
    longitude: 107.26436 + 2.5,
    latitude: 34.12908
};

export const mapOptions = (data: any) => (
    {
        map: 'china',
        center: [provinceCenter.longitude, provinceCenter.latitude], // 设置中心点为省份的中心
        // zoom: 1.2, // 设置合适的缩放级别
        label: {
            emphasis: {
                show: true
            }
        },
        backgroundColor: "rgb(30, 35, 48)",
        tooltip: {
            triggerOn: 'click',
            enterable: true,
        },
        series: [
            {
                type: 'map',
                map: 'china',
                zoom: 4,
                roam: true,
                selectModule: "single",
                scaleLimit: { // 滚轮缩放的极限控制，默认的缩放为1
                    min: 1,  // 最小的缩放值
                    max: 10,  // 最大的缩放值
                },
                emphasis: {
                    focus: 'none', //在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。'none' 不淡出其它图形，默认使用该配置。'self' 聚焦当前高亮图形，淡出其它图形。
                    // 高亮状态下文本标签
                    label: { 
                        color: '#76DDFE',
                    },
                    // 高亮状态下图形样式
                    itemStyle: {
                        areaColor: '#274881', // 高亮区域的颜色。
                        borderColor: '#94ECFF', // 图形的描边颜色。
                        borderWidth: 2, // 描边线宽。为 0 时无描边。
                        // opacity: 0.7
                    },
                },
                select: {
                    disabled: false, // 是否可以被选中。在开启selectedMode的时候有效，可以用于关闭部分数据。
                    // 选中区域文本标签
                    label: { 
                        color: '#76DDFE',
                    },
                    // 高亮状态下图形样式
                    itemStyle: {
                        areaColor: '#274881', // 高亮区域的颜色。
                        borderColor: '#94ECFF', // 图形的描边颜色。
                        borderWidth: 2, // 描边线宽。为 0 时无描边。
                        // opacity: 0.3
                    },
                },
                label: {
                    show: true,
                    color: '#2C3C41',
                    // color: 'red',
                    fontSize: 16,
                },
                itemStyle: {
                    normal: {
                        // borderWidth: 2,//边际线大小
                        // borderColor: '#263D50',//边界线颜色
                        areaColor: '#171F31', //默认区域颜色
                        // areaColor: {
                        //     image: img, // 替换为纹理图片的 URL
                        //     repeat: 'repeat' // 设置纹理重复
                        // }
                    }
                },
                data: [
                    // { name: '陕西省', selected:true }
                ],
                markPoint: {
                    symbol: 'circle', // 标记点形状
                    symbolSize: 10, // 标记点大小
                    data,
                    itemStyle: {
                        normal: {
                            color: "#F3DF32"
                        },
                    },
                },
                markLine: {
                    symbol: ['none', 'circle'], // 外圆点的形状，第一个是线的形状，这里设置为'none'
                    symbolSize: 40, // 外圆点的大小
                    // data,
                    itemStyle: {
                        color: '#01DBE8' // 外圆点的颜色
                    }
                }
            },
        ],
    }
);