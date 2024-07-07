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
            formatter: function(params: any, ticket: any, callback: any) {
                console.log(params)
                let content = {
                    area: 1,
                    areaName: params.name
                }
                // let result = that.$axios({
                //     method: 'get',
                //     url: that.getMapCompany,
                //     params: content
                // }).then(res => {
                //     console.log(params, content, 'log')
                // })
                // var tipHtml = `
                //     <div className="enterDialog" style="postion: absolute;left: 100px;">
                //         <div className="name">${params.name}</div>
                //         <div className="info">
                //             <div><span>牧场名称</span>：产投集团</div>
                //             <div><span>存栏数</span>：5000只</div>
                //             <div><span>地址</span>：</div>
                //         </div>
                //         <div className="enter" onClick={toDataV}></div>
                //     </div>
                // `;

                // tipHtml = '<div style="width:200px;height:200px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">'
                // +'<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);margin-bottom:10px;">'
                // +'<span style="margin-left:10px;color:#fff;font-size:16px;">'+ params.name +'</span>'+'</div>'
                // +'<div>'
                // +'<p style="color:#fff;font-size:12px;">'+'<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;margin:0 8px">'+'</i>'
                // +'公司数量：'+'<span style="color:#f48225;margin:0 6px;">'+3+'</span>'+'个'+'</p>'
                // +'<p style="color:#fff;font-size:12px;">'+'<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;margin:0 8px">'+'</i>'
                // +'被考核主体数量'+'<span style="color:#f4e925;margin:0 6px;">'+4+'</span>'+'个'+'</p>'
                // +'</div>'+'</div>';
                // return tipHtml;

                // return result;
                 
                 
            }
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
                    symbolSize: 20, // 标记点大小
                    data,
                    itemStyle: {
                        normal: {
                            color: "#F3DF32",
                            borderColor: "#01DBE8",
                        },
                    },
                },
            },
        ],
    }
);