<template>
  <div>

    <div class="container my-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <Header></Header>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from '@/layouts/Header.vue'

  export default {
    name: "Main",

    components: {
      Header
    },
  }
</script>

<style scoped>
  .card {
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
</style>