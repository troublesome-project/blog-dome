<template>
  <div id="app">
    <Header v-if="$route.path !== '/login'"/>
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
.el-input__inner {
  height: 0.4rem;
}
</style>
