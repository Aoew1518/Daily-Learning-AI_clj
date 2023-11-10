# 浮动
1. 脱离文档流
2. 文字环绕
3. 让块级元素同行显示
4. 让行内元素设置宽高
5. 浮动元素可以使用margin，但不能使用margin:0 auto; 

- 当一个元素设置了float属性之后，它会脱离正常文档流，因此margin: 0 auto;对于浮动元素来说失去了水平居中的效果。浮动元素的定位方式主要是通过float属性和clear属性来控制，而不是通过margin属性来实现水平居中。

- 如果想要实现浮动元素的水平居中，通常可以使用其他方法，比如给浮动元素设置固定的宽度并使用margin-left和margin-right来进行调整，或者使用Flexbox布局中的justify-content: center;属性来实现水平居中的效果。

# 清除浮动
1. 给父容器设置高度
2.  增加子容器，在子容器身上设置clear:both;属性，清楚浮动
3. 借助伪元素after清楚浮动
4. bfc

# BFC --Block Formatting Context
- 块级格式化上下文，一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

- 如何创建bfc：
    1. 浮动：float:left/right
    2. 绝对定位：position:absolute/fixed
    3. 行内块：display:inline-block
    4. 表格单元：display:table-cell/table-caption
    5. overflow：hidden/auto/scroll
    6. 弹性元素：display:flex/inline-flex
    

- bfc容器的特征
    bfc的效果是让处于bfc内部的元素与外部的元素相互隔离，使内部元素的定位不会相互影响

    1. 内部盒子也会按照文档流的顺序排序
    2. bfc容器在计算高度时，会将内部浮动的子元素的高度也计算在内
    3. 解决外边距重叠的问题
