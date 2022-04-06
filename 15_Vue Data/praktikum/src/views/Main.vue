<template>
  <div>
    <v-container fluid>
      <Header @open-drawer="openDrawer"></Header>
      <div class="d-flex w-100">
        <v-col
          :cols="drawer ? '2' : '1'"
          :class="drawer ? 'pa-0 me-15' : 'pa-0'"
          :style="!drawer ? 'left: -300px; transition: all 0.4s;' : 'transition: all 0.4s'"
        >
          <SideBar :drawer="drawer"></SideBar>
        </v-col>
        <v-col
          class="mt-16 me-5"
        >
          <router-view></router-view>
        </v-col>
      </div>
    </v-container>
  </div>
</template>

<script>
  import Header from '@/layouts/Header.vue'
  import SideBar from '@/layouts/SideBar.vue'

  export default {
    name: "Main",

    data() {
      return {
        drawer: true
      }
    },

    components: {
      Header,
      SideBar,
    },

    methods: {
      openDrawer() {
        return this.drawer = !this.drawer
      },
    },
  }
</script>

<style scoped>
</style>