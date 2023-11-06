# 路虎4s店小程序
- 架构
    - page架构
        - wxml->html
            小程序的组件div->view
        - wxss->css
        - js->js
        onLoad 声明周期
        data setData
        - json 配置
- 布局 flex弹性布局
    - css 的难点在于搞定布局
    - 二列式布局
    - float 浮动
    - flex 弹性布局
        子元素在一行
    - flex:1；主列
        其他列把宽度占完后，都给他
    - align-items:flex-end|center|flex-start

- 早点学架构
    - 基础组件
        button reset cell。。。。。
    - 业务模块

- 列表循环
    把数据库的数据展示出来
    <block wx:for="{{}}" wx:key="一个数组里面的唯一值">
    {{item.key}}
    </block>

- 数据请求
    onLauch 在全局发送一次数据请求