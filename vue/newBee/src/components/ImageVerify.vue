<template>
    <div class="img-verify">
      <canvas width="120" height="40" ref="verify"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, reactive } from 'vue';
  
  const verify = ref(null)
  const pool = ref('ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890')
  const imgCode = reactive({
    code: ''
  })
  // 子组件给父组件传东西，抛出{ verifyCode: imgCode }对象，具体的原始值不是响应式的，响应式对象imgCode才能抛出
  defineExpose({ verifyCode: imgCode })
  
  onMounted(() => {
    // console.log(verify.value);
    imgCode.code = draw()
  })
  
  // 随机数
  const randomNum = (min, max) => {
    return parseInt(Math.random() * (max - min) + min)
  }
  // 随机颜色
  const randomColor = (min, max) => {
    const r = randomNum(min, max)
    const g = randomNum(min, max)
    const b = randomNum(min, max)
    return `rgb(${r},${g},${b})`
  }
  
  const draw = () => { // 绘制图片
    const ctx = verify.value.getContext('2d')
    ctx.fillStyle = randomColor(180, 230)
    ctx.fillRect(0, 0, 120, 40)
    let imgCode = ''
    for (let i = 0; i < 4; i++) {
      const text = pool.value[randomNum(0, pool.value.length)]
      imgCode += text
      const fontSize = randomNum(18, 40)
      const deg = randomNum(-30, 30)
      ctx.font = fontSize + 'px Simhei'
      ctx.textBaseline = 'top'
      ctx.fillStyle = randomColor(80, 150)
      ctx.save()
      ctx.translate(30 * i + 15, 15)
      ctx.rotate(deg * Math.PI / 180)
      ctx.fillText(text, -10, -15)
      ctx.restore()
    }
    return imgCode
  }
  
  </script>
  
  <style lang="less" scoped>
  
  </style>