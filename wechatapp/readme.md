# 路虎4s店小程序开发
- html + css + js
- wxml
- 小程序的基本知识
    page
        index 首页、目录
            index.wxml      html    view   div
            index.js        js      
            index.wxss      css
            index.json

- swiper 组件
    - swiper-item

- 相对单位
    - 解决适配的问题
    PC 手机 平板
    - rpx 小程序里少用或不用px
        retina 3倍retina  1rpx = 3px
        vh view height视窗高度
        vw 视窗高度
        100 满屏 

- js
    - data 里面的数据可以绑定到页面上
    - 模板不是静态页面，由数据驱动的动态

- 小程序架构思想
    - pages的概念
        - wxml/wxss/js/json 组成
    - wxml 模板
        标签是小程序自带标签 view swiper html是没有的
        不是也页面，他是活的，动态部分绑定了数据{{}}和指令wx:for的
        只要数据发生改变，他会自动刷新
    - js
        data 可以绑定到模板的数据{{}}
        onload 生命周期 wx.request 去取下数据(后台)
        this.setData({
            slides:res.data.slides
        })