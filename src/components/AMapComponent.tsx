import { useEffect, useState } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import { AmapContainerStyle } from "./AMapComponentStyle";

const style = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": {
            "color": "#000000" // 将背景色设置为黑色
        }
    }
];

const AMapComponent = ({ data }: any) => {
    console.log("======AMapComponent=====", data)
    let map: any = null;

    //构建自定义信息窗体
    const createInfoWindow = (title: any, content: any) => {
        var info = document.createElement("div");
        info.className = "custom-info input-card content-window-card";

        //可以通过下面的方式修改自定义窗体的宽高
        info.style.width = "400px";
        // 定义顶部标题
        var top = document.createElement("div");
        var titleD = document.createElement("div");
        var closeX = document.createElement("img");
        top.className = "info-top";
        titleD.innerHTML = title;
        closeX.src = "https://webapi.amap.com/images/close2.gif";
        closeX.onclick = closeInfoWindow;

        top.appendChild(titleD);
        top.appendChild(closeX);
        info.appendChild(top);

        // 定义中部内容
        var middle = document.createElement("div");
        middle.className = "info-middle";
        middle.style.backgroundColor = 'white';
        middle.innerHTML = content;
        info.appendChild(middle);

        // 定义底部内容
        var bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style.position = 'relative';
        bottom.style.top = '0px';
        bottom.style.margin = '0 auto';
        var sharp = document.createElement("img");
        sharp.src = "https://webapi.amap.com/images/sharp.png";
        bottom.appendChild(sharp);
        info.appendChild(bottom);
        return info;
    }

    //关闭信息窗体
    const closeInfoWindow = () => {
        map.clearInfoWindow();
    }

    const addPolygon = (AMap: any, polygonData: any) => {
        let polygon = new AMap.Polygon({
            path: polygonData,
            fillColor: '#274780',
            strokeOpacity: 1,
            fillOpacity: 0.7,
            strokeColor: '#92E9FF',
            strokeWeight: 2,
            // strokeStyle: 'dashed',
            strokeDasharray: [5, 5],
        });
        // polygon.on('mouseover', () => {
        //     polygon.setOptions({
        //         fillOpacity: 0.7,
        //         fillColor: '#7bccc4'
        //     })
        // })
        // polygon.on('mouseout', () => {
        //     polygon.setOptions({
        //         fillOpacity: 0.5,
        //         fillColor: '#ccebc5'

        //     })
        // })
        map.add(polygon);
    }

    const createPolygon = (AMap: any) => {
        const search = new AMap.DistrictSearch({
            subdistrict: 0,
            extensions: 'all',
            level: "province"
        })

        search.search("陕西省", (status: any, result: any) => {
            const bounds = result.districtList[0].boundaries
            if (bounds) {
                for (var i = 0; i < bounds.length; i += 1) {//构造MultiPolygon的path
                    bounds[i] = [bounds[i]]
                }
            }
            addPolygon(AMap, bounds)
        })
    }

    const getInfoWindow = (AMap: any) => {
        //实例化信息窗体
        let title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>';
        let content = [];
        content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
        content.push("电话：010-64733333");
        content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
        var infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: createInfoWindow(title, content.join("<br/>")),
            offset: new AMap.Pixel(16, -45)
        });
        return infoWindow
    }

    // 添加点
    const addMarker = (AMap: any, position: any) => {
        const marker = new AMap.Marker({
            map,
            position
        });
        const infoWindow = getInfoWindow(AMap)
        //鼠标点击marker弹出自定义的信息窗体
        // marker.on('click', function () {
            infoWindow.open(map, marker.getPosition());
        // });
    }

    const createLayers = (AMap: any) => {
        // 卫星图
        let satellite = new AMap.TileLayer.Satellite()

        // 绘制世界地图国家轮廓
        let disWorld = new AMap.DistrictLayer.World({
            zIndex: 5,
            styles: {
                // 颜色格式: #RRGGBB、rgba()、rgb()、[r, g, b, a]
                // 国境线
                // 'nation-stroke': "",
                // 海岸线
                // 'coastline-stroke': '',
                // 填充
                // 'fill': 'rgba(20, 28, 44, 0)'
                'fill': 'rgba(20, 28, 44, 0.4)'
            }
        });

        // 绘制中国行政区
        let disCountry = new AMap.DistrictLayer.Country({
            zIndex: 10,
            depth: 1,
            // rejectMapMask: true,
            styles: {
                "stroke-width": 2,
                'nation-stroke': "", // 国境线
                'coastline-stroke': '', // 海岸线
                'province-stroke': 'RGBA(40, 71, 94, 1)', // 省线
                'city-stroke': 'RGBA(40, 71, 94, 0.3)', // 市线
                fill: "rgba(0, 0, 0, 0)",
            }
        })

        return [satellite, disWorld, disCountry]
    }

    const createMarkerInfoWindow = (AMap: any) => {
        console.log("createMarkerInfoWindow======", data)
        data?.forEach((item: any) => {
            addMarker(AMap, item.coord)
        })
    }

    useEffect(() => {
        console.log("=====useEffect==", data);
        (window as any)._AMapSecurityConfig = {
            securityJsCode: "eb2ce8e44cacb71ac13e497dae6efaf2",  // 你申请的安全密钥
        };

        AMapLoader.load({
            key: "3393601f6cd8bb12c7ab0fd32c4fbef2", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: ["AMap.Scale", "AMap.DistrictSearch"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
        })
            .then((AMap) => {
                map = new AMap.Map('amap-container', {
                    // center: [116.472804, 39.995725],
                    viewMode: '3D',
                    labelzIndex: 130,
                    zoom: 6,
                    zooms: [3, 8],
                    cursor: 'pointer',
                    layers: createLayers(AMap)
                });
                if (data.length > 0) {
                    createMarkerInfoWindow(AMap)
                }
            })
            .catch((e) => {
                console.log(e);
            });

        return () => {
            map?.destroy();
        };
    }, [data]);

    return (
        <AmapContainerStyle>
            <div
                id="amap-container"
                className="amapContainer"
                style={{ height: "100%", width: "100%" }}
            ></div>
        </AmapContainerStyle>
        
    );
}

export default AMapComponent