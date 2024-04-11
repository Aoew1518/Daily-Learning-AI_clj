import React, { Children, Suspense } from 'react';
import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom';
import Login from '../pages/login/index.jsx';
// import LayoutWrap from '../pages/layout/index.jsx';
// import Students from '../pages/students/index.jsx';
// import Employment from '../pages/employment/index.jsx';
// import Personal from '../pages/personal/index.jsx';
const LayoutWrap = React.lazy(() => import('../pages/layout/index.jsx')) // 路由懒加载
const Students = React.lazy(() => import('../pages/students/index.jsx'))
const Employment = React.lazy(() => import('../pages/employment/index.jsx'))
const Personal = React.lazy(() => import('../pages/personal/index.jsx'))

const routerList = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/layout',
        element: <LayoutWrap />,
        children: [
            {
                path: '',
                element: <Navigate to={'/layout/students'}></Navigate>
            },
            {
                path: 'students',
                element: <Students />,
            },
            {
                path: 'employment',
                element: <Employment />,
            },
            {
                path: 'personal',
                element: <Personal />,
            },
        ]
    },
]

function Element() {
    const el = useRoutes(routerList)
    return el
}

function WrapperRouter() {

    return (
        <BrowserRouter>
            <Suspense>
                <Element />
            </Suspense>
        </BrowserRouter>
    )
}

export default WrapperRouter;