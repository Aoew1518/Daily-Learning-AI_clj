import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Views/Home'
import Layout from './Views/Layout';
import Article from './Views/layout-views/Article';
import Publish from './Views/layout-views/Publish';

const App2 = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/* 二级路由 */}
                    <Route path="/layout" element={<Layout />}>
                        {/* 二级路口页面进入重定向 */}
                        <Route path='' element={<Navigate to={'/layout/article'} />}></Route>
                        <Route path="article" element={<Article />}></Route>
                        <Route path="publish" element={<Publish />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App2;