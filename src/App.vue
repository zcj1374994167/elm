<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/footer'
import Header from './components/header'
export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
#app{
  height: 100%;
  width: 100%;
}
</style>
