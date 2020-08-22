<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"> 
    <Home/>
  </div>
</template>

<script> 
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app { 
  text-align: center;
  /* color: #2c3e50;
  margin-top: 60px; */
}
</style>
