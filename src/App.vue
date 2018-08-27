<template>
  <div id="app">
    <p>
       <router-link to="/user/foo">/user/foo</router-link>
       <router-link to="/user/bar">/user/bar</router-link>
    </p>
    <!-- 这里是路由出口，路由匹配到的文件渲染到这里 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
