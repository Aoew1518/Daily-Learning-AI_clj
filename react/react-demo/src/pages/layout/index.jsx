import React, { useState } from 'react';
import { Layout, Flex } from 'antd';
import './index.css'
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

const LayoutWrap = () => {
    const data = [
        { id: '1', title: '班级人员', path: '/layout/students' },
        { id: '2', title: '就业数据', path: '/layout/employment'},
        { id: '3', title: '个人详情', path: '/layout/personal'},
    ]

    const navigate = useNavigate()
    const [activeIndex, setActiveIndex] = useState(0); // 默认第一个按钮为活动状态

    const handleClick = (index, path) => {
        setActiveIndex(index);
        navigate(path); // 假设 navigate 函数已经定义了
    };


    return (
        <div className='layout'>
            <Layout>
                <Header className='hd'>
                    <h2>旅梦后台管理系统</h2>
                    <p>欢迎, admin</p>
                </Header>
                <Layout>
                    <Sider width="200px" className='side'>
                        {
                            data.map((item, index) => {
                                return <div key={item.id} className={index === activeIndex ? 'aside-item-active' : 'aside-item'} onClick={() => handleClick(index, item.path) }>{item.title}</div>
                            })
                        }
                    </Sider>
                    <Content>
                        <Outlet   />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
export default LayoutWrap;