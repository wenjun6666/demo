import {
    lazy
} from 'react';
import { BarChartOutlined, PieChartOutlined, UserOutlined ,BoxPlotOutlined,WindowsOutlined} from '@ant-design/icons';
export const secondRoute = [{
        path: '/home/index',
        element: lazy(() => import('../views/home/Index')),
        title: '首页',
        icon:<PieChartOutlined />
    },
    {
        path: '/home/manage',
        element: lazy(() => import('../views/home/Manage')),
        title: '系统管理',
        icon:<BarChartOutlined />
    },
    {
        path: '/home/control',
        element: lazy(() => import('../views/home/Control')),
        title: '系统监控',
        icon:<UserOutlined />
    },
    {
        path: '/home/tool',
        element: lazy(() => import('../views/home/Tool')),
        title: '系统工具',
        icon:<BoxPlotOutlined />
    },
    {
        path: '/home/official',
        element: lazy(() => import('../views/home/Official')),
        title: '若依官网',
        icon:<WindowsOutlined />
    },
]
const routes = [{
        path: '/',
        to: '/home/index',
    },
    {
        path: '/home',
        element: lazy(() => import('../views/Home.jsx')),
        children: secondRoute,
    },
    {
        path: '/login',
        element: lazy(() => import('../views/Login.jsx')),
    },
    {
        path:'*',
        element:lazy(()=>import('../views/Error.jsx')),
    },
]

export default routes