<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{ localTime }}</div>
      <div class="city">切换城市</div>
    </div>

    <div class="city-info">
      <p class="city">{{ mapData.city }}</p>
      <p class="weather">{{ mapData.weather }}</p>
      <h2 class="temp">
        <em>{{ mapData.temperature }}</em>℃
        <!-- em为斜体 -->
      </h2>
      <div class="detail">
        <span>风力：{{ mapData.windPower }}</span> |
        <span>风向：{{ mapData.windDirection }}</span> |
        <span>空气湿度：{{ mapData.humidity }}</span>
      </div>
    </div>

    <!-- 因为从网页加载时需要时间,futureData一开始为[], 用下标时会报错-->
    <div class="future" v-if="futureData.length > 0">
      <div class="group">
        明天：
        <span class="tm">白天：
          {{ futureData[0].dayTemp }}℃ 
          {{ futureData[0].dayWeather }} 
          {{ futureData[0].dayWindDir }}
          {{ futureData[0].dayWindPower }}</span>
        <span class="tm">夜间：1℃ 雪 北风 4</span>
      </div>
      <div class="group">
        后天：
        <span class="tm">白天：1℃ 雪 北风 4</span>
        <span class="tm">夜间：1℃ 雪 北风 4</span>
      </div>
    </div>
  </div>
</template>

<script>
// 引入 JS API  Loader
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  data() {
    return {
      localTime: '',
      mapData: {},
      futureData: []
    }
  },
  created() {  // 页面在加载过程中自动执行的函数--生命周期函数
    setInterval(() => { //必须写箭头函数，不然this指向不了vue
      this.localTime = new Date().toLocaleTimeString()
    }, 1000)
    // 加载高德地图的api做城市定位
    this.initAMap()
  },
  methods: {
    initAMap() {
      // 创建变量记录this的地址
      let that = this;
      AMapLoader.load({
        key: "22b2f2af1e40d6438238199b800ae37a", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => { //AMap 高德地图实例对象
        // ip定位
        AMap.plugin('AMap.CitySearch', function () {
          var citySearch = new AMap.CitySearch()
          citySearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              // 查询成功，result即为当前所在城市信息
              // console.log(result);

              // 拿到城市信息后调用天气函数
              // 如果这里that为this则指向function,不指向vue,用记录this的变量that
              that.getWeatcherData(AMap, result.city)
            }
          })
        })

      })

    },
    getWeatcherData(AMap, cityName) {
      // 设置变量that记录this指向vue
      let that = this
      //加载天气查询插件
      AMap.plugin('AMap.Weather', function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(cityName, function (err, data) {
          // console.log(err, data);
          that.mapData = data
        });

        // 执行预报天气信息查询
        weather.getForecast(cityName, function (err, data) {
          console.log(err, data);
          that.futureData = data.forecasts.slice(1, 3)
        });

      });
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  background: #000;
  opacity: 0.7;
  color: #fff;

  .nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .city-info {
    text-align: center;

    .temp {
      font-size: 26px;

      em {
        font-style: normal;
        font-size: 34px;
      }
    }
  }

  .future {
    padding: 0 10px;
    margin-top: 30px;

    .group {
      height: 44px;
      line-height: 44px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.3);
      color: #fff;
      font-size: 13px;
      margin-bottom: 10px;
      padding: 0 10px;
    }
  }
}
</style>