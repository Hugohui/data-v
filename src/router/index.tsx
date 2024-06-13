import { BasicLayout } from "../layout/BasicLayout"
import { AnimalSituation } from "../pages/AnimalSituation"
import { Feeding } from "../pages/Feeding"
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
        element: <BasicLayout children={AnimalSituation()}></BasicLayout>,
    },
    // 养殖概况
    {
        path: '/feeding',
        element: <BasicLayout children={Feeding()}></BasicLayout>,
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