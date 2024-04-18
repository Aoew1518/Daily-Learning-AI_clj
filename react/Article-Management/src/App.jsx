import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'  // 路由守卫组件

import Login from '@/pages/login';
import Layout from '@/pages/layout';

const App = props => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<AuthRoute><Layout/></AuthRoute>} /> 
          {/* 这里高阶组件把</AuthRoute>组件传进行，可以进行重定向 */}
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

App.propTypes = {

};

export default App;