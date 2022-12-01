<template>
    <!-- 头部组件 -->
    <navTop></navTop>
    <!-- 二级路由 -->
    <router-view></router-view>
</template>
<script>
import navTop from '../components/navTop.vue'
export default {
    name: 'layOut',
    components: {
        navTop
    },
    setup() {
    }
}
</script>