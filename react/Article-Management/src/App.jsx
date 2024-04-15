import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '@/pages/login';
import Layout from '@/pages/layout';

const App = props => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

App.propTypes = {

};

export default App;