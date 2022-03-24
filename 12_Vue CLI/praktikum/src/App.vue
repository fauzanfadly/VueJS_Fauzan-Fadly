<template>
  <div id="app">

    <Main />

  </div>
</template>

<script>
  import Main from './views/Main.vue';

  export default {
    name: 'App',
    components: {
      Main,
    }
  }
</script>

<style>
  @import './assets/bootstrap/css/bootstrap.min.css';

  :root {
    --blue: #143362;
  }

  .text-blue {
    color: var(--blue);
  }
</style>