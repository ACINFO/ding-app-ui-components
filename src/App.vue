<template>
  <div id="app">
    <card>123</card>
    <card></card>
    <router-view/>
  </div>
</template>

<script>
  import Card from './components/base/Card.vue'
  export default {
    name: 'app',
    components: {
      Card
    }
  }
</script>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #efefef;
}
</style>
