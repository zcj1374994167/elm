<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app{
  height: 100%;
  width: 100%;
}
</style>
