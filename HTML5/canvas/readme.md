# Three.js、WebGL 和 HTML5 Canvas 来实现一个简单的 3D 地球模型
- HTML5 Canvas: 通过 canvas 标签用于绘制图形，特别是 WebGL 图形。
- Three.js: 一个用于创建和显示 3D 图形的 JavaScript 库，基于 WebGL。代码中使用 Three.js 来创建 3D 场景、相机、渲染器、模型等。
- WebGL: 浏览器内建的 3D 图形渲染 API，用于渲染图形并生成 3D 视觉效果。Three.js 是 WebGL 的封装，使其更易用。
- 纹理加载: 使用 THREE.TextureLoader() 加载地球的纹理图像（earth.jpg），并将其应用到 3D 球体上。
- 动画: 使用 requestAnimationFrame 来实现平滑动画，通过持续更新 3D 场景中的旋转状态来模拟地球旋转。