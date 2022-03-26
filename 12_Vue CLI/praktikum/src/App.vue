<template>
  <div id="app">

    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">

          <router-view></router-view>

        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'App',
  }
</script>

<style>
  @import './assets/bootstrap/css/bootstrap.min.css';

  :root {
    --blue: #143362;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  .text-blue {
    color: var(--blue);
  }

  .btn {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  }

  .btn:active {
    box-shadow: none;
    transform: translateY(3px) scaleY(0.9);
  }

  .btn:focus {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  }
</style>