import { useEffect, useRef, useState } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import { AmapContainerStyle } from "./AMapComponentStyle";
import ReactDOMServer from 'react-dom/server'
import mapFlex from '@/assets/img/mapFlex.png'
import { useNavigate } from "react-router-dom";
import { setFarmInfo } from "@/utils/session";
import iconMapMarker from '@/assets/img/icons/iconMapMarker.png'
import * as echarts from 'echarts';
import { sheePedigreeOptions } from "./SheePedigreeOptions";
import { getSheePedigree } from "@/api/IndexPage";
import useEvent from "@/hooks/useEventHook";

const AMapComponent = ({ data, pedigreeData }: any) => {
    let map: any = null;
    const [mapComplete, setMapComplete] = useState(false)
    const { publish } = useEvent()
    const currentInfoWindow = useRef<any>(null)
    const optionsMapRef = useRef<any>({})

    const addPolygon = (AMap: any, polygonData: any) => {
        try {
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
            map.add(polygon);
        } catch (error) {
            console.log("addPolygon error", error)
        }
    }

    // 省份高亮
    const createPolygon = (AMap: any) => {
        const search = new AMap.DistrictSearch({
            subdistrict: 0,
            extensions: 'all',
            level: "city"
        })

        const provinceList: any = []
        data?.forEach((item: any) => {

            const province = item?.origin?.ProvinceName
            if (provinceList.includes(province)) return;
            provinceList.push(province)

            search.search(province, (status: any, result: any) => {
                const bounds = result.districtList[0].boundaries
                if (bounds) {
                    for (var i = 0; i < bounds.length; i += 1) {//构造MultiPolygon的path
                        bounds[i] = [bounds[i]]
                    }
                }
                addPolygon(AMap, bounds)
            })
        })
    }

    const EnterMarker = ({ info }: any) => {     
        return (
            <div 
                className="SheePedigreeBg"
                style={{ 
                width: "435px", 
                height: "439px",
                backgroundSize: '100% 100%',
                backgroundRepeat: "no-repeat",
                position: 'relative'
            }}>
                <div id="graphLoading" style={{
                    textAlign: "center",
                    color: "#fff",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}>数据加载中...</div>
                
                <div style={{
                    height: "60px",
                    lineHeight: "60px",
                    textAlign: "center",
                    fontSize: "20px",
                    color: "#fff",
                    fontWeight: "bolder",
                    position: "relative",
                }}>
                    {info.name}

                    <span style={{
                        position: "absolute",
                        right: "10px",
                        top: "15px",
                        width: "30px",
                        height: "30px",
                        cursor: "pointer"
                    }} title="放大" id="scaleGraph" data-info={JSON.stringify(info?.origin)}></span>
                </div>

                <div className="info" id="markerEchart" style={{
                    width: "435px",
                    height: "340px",
                    // fontSize: "15px",
                    color: "#fff",
                    position: 'absolute',
                    right: 0,
                    top: "50px",
                    lineHeight: "32px",
                    padding: "15px 10px 10px 10px",
                    userSelect: 'none'
                }}>
                    {/* <div><span>牧场名称</span>：{info?.name}</div>
                    <div><span>存栏数</span>：{info?.origin?.cowCount} 只</div>
                    <div><span>地址</span>：{info?.origin?.address}</div> */}
                </div>

                <div className="enter" id="markerEnter" style={{
                    width: "90%",
                    height: "30px",
                    position: "absolute",
                    bottom: "23px",
                    right: "25px",
                    cursor: "pointer"
                }} data-info={JSON.stringify(info?.origin)}></div>

                <span style={{
                    width: '150px',
                    height: '0',
                    borderTop: '1px solid #00DDEA',
                    position: 'absolute',
                    bottom: '110px',
                    left: '-150px'
                }}></span>
                <span style={{
                    width: 0,
                    height: '60px',
                    borderLeft: '1px solid #00DDEA',
                    position: 'absolute',
                    bottom: '50px',
                    left: '-150px'
                }}></span>
            </div>
        )
    }

    /**
     * 关系图数据加载中 loading
     * @param lading 
     */
    const setGraphLoading = (lading: boolean) => {
        const graphLoading: any = document.getElementById('graphLoading')
        graphLoading.style.display = lading ? 'block' : 'none'
    }

    const renderDialog = (info: any) => {
        const content = ReactDOMServer.renderToString(<EnterMarker info={info}></EnterMarker>)
        return content
    }

    const renderECharts = async (farmId: any) => {
        const markerEchart = echarts.init(document.getElementById('markerEchart'))
        markerEchart.clear()
        if (!optionsMapRef?.current?.[farmId]) {
            setGraphLoading(true)
            const res = await getSheePedigree({
                farmId
            })
            setGraphLoading(false)
            optionsMapRef.current[farmId] = res.data
        }
        const options = sheePedigreeOptions(optionsMapRef?.current?.[farmId])
        markerEchart.setOption(options, true)
    }

    // 添加点
    const addMarker = (AMap: any, item: any, index: number) => {
        var infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: renderDialog(item),
            offset: new AMap.Pixel(378, 50),
        });

        var icon = new AMap.Icon({
            size: new AMap.Size(20, 20), // 图标所用的大小
            image: iconMapMarker, // 图标的URL
            imageSize: new AMap.Size(20, 20) // 图标所用的大小
        });
        const marker = new AMap.Marker({
            map,
            position: item.coord,
            icon
        });
        // 默认展示第一个信息窗
        if (index === 0) {
            infoWindow.open(map, marker.getPosition());
            renderECharts(item?.origin?.PastureCode);
            currentInfoWindow.current = infoWindow
        }
        //鼠标点击marker切换信息窗体
        marker.on('click', function () {
            if (infoWindow.getIsOpen()) {
                infoWindow.close()
            } else {
                infoWindow.open(map, marker.getPosition());
                renderECharts(item?.origin?.PastureCode);
                currentInfoWindow.current = infoWindow
            }
        });
    }

    const createLayers = (AMap: any) => {
        // 卫星图
        let satellite = new AMap.TileLayer.Satellite()

        // 模拟水印效果
        var flexLayer = new AMap.TileLayer.Flexible({
            cacheSize: 200,
            opacity: 1,
            tileSize: 128,
            createTile: function (x: any, y: any, z: any, success: any, fail: any) {
                var img = document.createElement('img');
                img.onload = function () {
                    success(img)
                };
                img.onerror = function () {
                    fail()
                };
                img.src = mapFlex
            }
        });

        // 路网
        const roadLayer = new AMap.TileLayer.RoadNet({
            opacity: 0.6,
        })

        return [satellite, flexLayer, roadLayer]
    }

    const createMarker = (AMap: any) => {
        data?.forEach((item: any, index: number) => {
            addMarker(AMap, item, index)
        })
    }

    const navigate = useNavigate()

    const toDataV = (event: any) => {
        if (event.target.matches("#markerEnter")) {
            const info = JSON.parse(event?.target?.dataset?.info || '{}')
            setFarmInfo(info)
            navigate('/dataV')
        }
        if (event.target.matches("#scaleGraph")) {
            const info = JSON.parse(event?.target?.dataset?.info || '{}')
            publish('onMapScaleGraphClick', info)
            if (currentInfoWindow?.current?.getIsOpen()) {
                currentInfoWindow?.current?.close()
            }
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
                console.log("====data[0]?.coord", data[0]?.coord)
                map = new AMap.Map('amap-container', {
                    center: [Number(data[0]?.coord[0]) + 3, Number(data[0]?.coord[1])],
                    viewMode: '3D',
                    labelzIndex: 130,
                    zoom: 6,
                    zooms: [5, 10],
                    cursor: 'pointer',
                    layers: createLayers(AMap)
                });

                map.on('complete', () => {
                    setMapComplete(true)
                })

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
    }, [data, pedigreeData]);

    return (
        <AmapContainerStyle>
            <div
                id="amap-container"
                className="amapContainer"
                style={{ height: "100%", width: "100%", position: 'relative', backgroundColor: 'none' }}
            ></div>
            {!mapComplete ? <div className="mapLoading">
                <div className="loading loader">
                    <div className="loader"></div>
                    <div>地图加载中...</div>
                </div>
            </div> : ''}
        </AmapContainerStyle>
        
    );
}

export default AMapComponent