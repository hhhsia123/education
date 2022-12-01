
<template>

  <!-- 一级路由 -->
  <router-view />
</template>
<script>
import { onMounted } from 'vue'
export default {
  name: 'App',
  components: {
  },
  setup() {
    onMounted(() => {
      document.body.style.setProperty('--el-color-primary', '#56AB2F')
      document.body.style.setProperty('--el-color-primary-light-9', '#F5FBF0')
      document.body.style.setProperty('--el-color-primary-light-3', '#95d475')
    })
  }
}
</script>
<style lang="less">

</style>
