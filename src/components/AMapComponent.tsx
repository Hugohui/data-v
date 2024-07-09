import { useEffect, useState } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import { AmapContainerStyle } from "./AMapComponentStyle";
import { EnterDialog } from '@/pages/IndexPage/components/EnterDialog';
import ReactDOMServer from 'react-dom/server'
import indexEnterDialog from '@/assets/img/indexEnterDialog.png'
import { useNavigate } from "react-router-dom";
import { setFarmInfo } from "@/utils/session";
// import indexPageBg from '@/assets/img/indexPageBg.png'

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
    let map: any = null;

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
            level: "city"
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

    const EnterMarker = ({ info }: any) => {
        return (
            <div style={{ 
                width: "362px", 
                height: "290px", 
                backgroundImage: `url(http://112.126.95.138:8600/farmImages/indexEnterDialog.png)`,
                backgroundSize: '100% 100%',
                backgroundRepeat: "no-repeat",
                position: 'relative'
            }}>
                <div className="info" style={{
                    width: "200px",
                    fontSize: "15px",
                    color: "#fff",
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    lineHeight: "32px",
                    padding: "15px 10px 10px 10px",
                    userSelect: 'none'
                }}>
                    <div><span>牧场名称</span>：{info?.name}</div>
                    <div><span>存栏数</span>：{info?.origin?.cowCount} 只</div>
                    <div><span>地址</span>：{info?.origin?.address}</div>
                </div>
                <div className="enter" id="markerEnter" style={{
                    width: "160px",
                    height: "30px",
                    position: "absolute",
                    top: "118px",
                    right: "25px",
                    cursor: "pointer"
                }} data-info={JSON.stringify(info?.origin)}></div>
            </div>
        )
    }

    const renderDialog = (info: any) => {
        const content = ReactDOMServer.renderToString(<EnterMarker info={info}></EnterMarker>)
        return content
    }

    // 添加点
    const addMarker = (AMap: any, item: any) => {
        const marker = new AMap.Marker({
            map,
            position: item.coord,
            content: renderDialog(item),
            offset: new AMap.Pixel(0, -362)
        });
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
                'fill': 'rgba(20, 28, 44, 0)'
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

        // 该demo可模拟水印效果
        var layer = new AMap.TileLayer.Flexible({
            cacheSize: 30,
            opacity: 0.3,
            createTile: function (x: any, y: any, z: any, success: any, fail: any) {
                // if ((x + y) % 3) {
                //     fail();
                //     return;
                // }

                var img = document.createElement('img');
                img.onload = function () {
                    success(img)
                };
                // img.crossOrigin = "anonymous";//3D 的时候添加，同时图片要有跨域头
                img.onerror = function () {
                    fail()
                };

                img.src = indexEnterDialog
            }
        });

        return [satellite, disWorld, disCountry]
    }

    const createMarker = (AMap: any) => {
        data?.forEach((item: any) => {
            addMarker(AMap, item)
        })
    }

    const navigate = useNavigate()

    const toDataV = (event: any) => {
        if (event.target.matches("#markerEnter")) {
            const info = JSON.parse(event?.target?.dataset?.info || '{}')
            setFarmInfo(info)
            navigate('/dataV')
        }
    }

    useEffect(() => {
        const amapContainer = document.getElementById("amap-container")
        amapContainer?.addEventListener('click', toDataV);
        return () => {
            amapContainer?.removeEventListener('click', toDataV);
        }
    }, [])

    useEffect(() => {
        (window as any)._AMapSecurityConfig = {
            securityJsCode: "eb2ce8e44cacb71ac13e497dae6efaf2",  // 你申请的安全密钥
        };

        AMapLoader.load({
            key: "3393601f6cd8bb12c7ab0fd32c4fbef2", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: ["AMap.Scale", "AMap.DistrictSearch", "AMap.Icon",], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
        })
            .then((AMap) => {
                map = new AMap.Map('amap-container', {
                    center: data[0]?.coord,
                    viewMode: '3D',
                    labelzIndex: 130,
                    zoom: 8,
                    zooms: [6, 10],
                    cursor: 'pointer',
                    layers: createLayers(AMap)
                });

                if (data.length > 0) {
                    createMarker(AMap)
                    createPolygon(AMap)
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