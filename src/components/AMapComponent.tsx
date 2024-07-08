import { useEffect, useState } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";

const style = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": {
            "color": "#000000" // 将背景色设置为黑色
        }
    }
];

const AMapComponent = () => {
    let map: any = null;

    useEffect(() => {
        (window as any)._AMapSecurityConfig = {
            securityJsCode: "eb2ce8e44cacb71ac13e497dae6efaf2",  // 你申请的安全密钥
        };

        var opts = {
            subdistrict: 0,   //返回下一级行政区
            extensions: 'all',  //返回行政区边界坐标组等具体信息
        };
        AMapLoader.load({
            key: "3393601f6cd8bb12c7ab0fd32c4fbef2", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: ["AMap.Scale", "AMap.DistrictSearch", "AMap.service"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
        })
            .then(async (AMap) => {

                // let opts = {
                //     subdistrict: 0,
                //     extensions: 'all',
                // };
                // let district = new AMap.DistrictSearch(opts);
                // let mask: any = []
                // district.search('中国', function (status: any, result: any) {
                //     let bounds = result.districtList[0].boundaries;
                //     for (let i = 0; i < bounds.length; i += 1) {
                //         mask.push([bounds[i]])
                //     }
                //     console.log("33333=======", mask)
                // })

                let disCountry = new AMap.DistrictLayer.World({
                    zIndex: 1,
                    rejectMapMask: true,
                    styles: {
                        fill: "rgba(0, 0, 0, 1)",
                    }
                })

                let province = new AMap.DistrictLayer.Province({
                    zIndex: 2,
                    depth: 2,
                    styles: {
                        "province-stroke": "#209AB7",
                        "city-stroke": "#209AB7",
                        fill: "rgba(0, 0, 0, 0)",
                    },
                });

                let map = new AMap.Map('amap-container', {
                    // mask: mask,
                    center: [116.472804, 39.995725],
                    viewMode: '3D',
                    labelzIndex: 130,
                    zoom: 6,
                    zooms: [3, 8],
                    cursor: 'pointer',
                    mapStyle: "amap://styles/darkblue",
                    layers: [
                        // new AMap.TileLayer.RoadNet({
                        //     zIndex: 3
                        // }),
                        new AMap.TileLayer.Satellite(),
                        // disCountry,
                        // province,
                    ]
                });
            })
            .catch((e) => {
                console.log(e);
            });

        return () => {
            map?.destroy();
        };
    }, []);

    return (
        <div
            id="amap-container"
            style={{ height: "100%", width: "100%" }}
        ></div>
    );
}

export default AMapComponent