// 封装分类数据业务相关代码
import { onMounted, ref, watch } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory () {
  // 获取分类数据
  const categoryData = ref({})
  const route = useRoute()
// 路由守卫 不传id时用默认的route.params.id，有id时则用传参的id
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())

  // 目标:路由参数变化的时候 可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    // 存在问题：使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id)
  })

// 监听整个 $route 对象的变化
// watch(() => route.params, () => {
//     getCategory();
// });

// watch(() => route, () => {
//     getCategory();
// }, { deep: true });

  return {
    categoryData
  }
}