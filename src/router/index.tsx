import { AnimalSituation } from "../pages/AnimalSituation"
import { Feeding } from "../pages/Feeding"
import { Health } from "../pages/Health"
import { Weigh } from "../pages/Weigh"
import { Milk } from "../pages/Milk"
import { WeighBridge } from "../pages/WeighBridge"
import { DataV } from "../pages/DataV"
import { DataVDetial } from "../pages/DataVDetial"
import { IndexPage } from "../pages/IndexPage"
import { Login } from "../pages/Login"
import { NotFound } from "../pages/NotFound"


const routers = [
    // 首页
    {
        path: '/',
        element: <IndexPage />,
    },
    // 养殖概况
    {
        path: '/animalSituation',
        element: <AnimalSituation />,
    },
    // 饲喂概况
    {
        path: '/feeding',
        element: <Feeding />,
    },
    // 健康监测
    {
        path: '/health',
        element: <Health />,
    }, 
    // 自动称重
    {
        path: '/weigh',
        element: <Weigh />,
    }, 
    // 奶厅监测
    {
        path: '/milk',
        element: <Milk />,
    }, 
    // 地磅监测
    {
        path: '/weighBridge',
        element: <WeighBridge />,
    }, 
    // 数据可视化
    {
        path: '/dataV',
        element: <DataV />,
        name: "myPathName"
    }, 
    // 数据可视化详情
    {
        path: '/dataVDetail',
        element: <DataVDetial />,
    }, 
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routers