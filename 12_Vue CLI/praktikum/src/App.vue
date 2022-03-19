<template>
  <div id="app">

    <ToDoList></ToDoList>

  </div>
</template>

<script>
  import ToDoList from './components/ToDoList.vue';

  export default {
    name: 'App',
    components: {
      ToDoList
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