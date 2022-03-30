<template>
  <div id="app">

    <Main></Main>

  </div>
</template>

<script>
  import Main from './views/Main.vue'

  export default {
    name: "App",
    components: {
      Main
    }
  }
</script>

<style>
  body {
    font-family: 'Poppins', sans-serif !important;
    background: url('./assets/media/images/backgrounds/main-bg.jpg') no-repeat center center fixed;
    background-size: cover;
    background-color: #f9f9f9;
  }
</style>