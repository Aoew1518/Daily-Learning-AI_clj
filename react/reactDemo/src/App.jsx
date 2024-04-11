import React from 'react';
import { BrowserRouter, HashRouter, Link, Routes, Route, useNavigate, useSearchParams, useParams } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      this is Home page
      {/* <button onClick={() => navigate('/about?id=123')}>跳去关于页面</button>   */}
      <button onClick={() => navigate('/about/100', { replace: true})}>跳去关于页面</button>  
    </div>
  )
}

const About = () => {
  let [ params ]  = useSearchParams()
  console.log(params.get('id'))

  // 获取路由参数
  let params1  = useParams()
  console.log(params1.id)

  return (
    <div>
      this is About page
    </div>
  )
}
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Link to={'/'}>首页</Link>
        <Link to={'/about'}>关于</Link>
        
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about/:id'} element={<About />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;