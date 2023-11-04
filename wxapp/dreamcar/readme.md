# 路虎4s店小程序

- 架构
  - page架构
  - wxml -> html
    小程序组件 div -> view
  - wxss ->css
  - js -> js
    onLoad   生命周期
    data  setData
    - json 配置
  - 布局魔法 Flex 弹性布局
  - css 的难点在于搞定布局
  - 二列试布局
    - float 弹性
      子元素在一起
      - flex: 1 主列
        其他列把宽度占完后，都给它
      - align-items:flex-end|center|
      flex-start