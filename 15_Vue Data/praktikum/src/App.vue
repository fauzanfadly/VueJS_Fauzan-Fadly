<template>
  <v-app id="app" class="myfont">
    <Main></Main>
  </v-app>
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
  :root {
    --blue: #2196F3;
    --indigo: #3F51B5;
  }

  #app {
    font-family: 'Poppins', sans-serif !important;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px !important;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent !important;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: orange !important;
    border-radius: 50px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: red !important;
  }
</style>