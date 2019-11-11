<template>
  <div id="app">
    <p>
      This is Vue.js component, which contains Html content that will be display to the user, the javascript code 
      required by the Html, and the CSS that styles the elements.
    </p>
    <HelloWorld msg="A msg from parent component"/>
    <h1>The content in App.Vue</h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
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
