<template>
  <div>
    <v-app-bar
      color="indigo"
      dark
      fixed
      elevation="0"
    >
      <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title @click="redirect('All')" class="header-logo"><b>BERITA'IN</b></v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",

  emits: [
    "open-drawer"
  ],

  methods: {
    openDrawer() {
      return this.$emit("open-drawer")
    },

    redirect(pathName) {
      return this.$router.push({
        name: pathName
      })
    }
  },
}
</script>

<style scoped>
  h3 {
    color: rgba(0, 116, 182, 1);
  }

  .row .col-auto {
    cursor: pointer;
    padding-bottom: 2px;
  }

  .row .col-auto:hover {
    color: rgb(80, 164, 192);
    font-weight: bold;
    border-bottom: 2px solid lightblue;
    padding-bottom: 0;
  }

  .active-category {
    color: rgb(80, 164, 192);
    font-weight: bold;
    border-bottom: 2px solid lightblue;
    padding-bottom: 2px !important;
  }

  .header-logo {
    cursor: pointer;
  }
</style>