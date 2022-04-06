<template>
  <div>
    <v-navigation-drawer
      color="blue"
      class="pt-15"
      style="z-index: 1 !important"
      v-model="drawer"
      dark
      fixed
    >
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="menu in sideBarMenus"
          :key="menu.title"
          link
          :class="(activeCategory === menu.title.toLowerCase() ? 'active-category' : '')"
          @click="redirect((menu.title === 'All' ? 'All' : 'Category'), menu.title)"
        >
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { menus } from '../values/menus.js'

export default {
  name: "SideBar",

  props: {
    drawer: Boolean
  },

  computed: {
    sideBarMenus: function() {
      return menus
    },
    activeCategory: function() {
      if (this.$route.name === "All" || this.$route.name === "Category") {
        return this.$route.params.category == null ? 'all' : this.$route.params.category
      }
      return 'a'
    }
  },

  methods: {
    redirect(pathName, paramCategory = "") {
      if (pathName === "All") {
        return this.$router.push({
          name: pathName
        })
      }
      return this.$router.push({
        name: pathName,
        params: { category: paramCategory.toLowerCase() }
      })
    },
  },
}
</script>

<style scoped>
  .active-category {
    background-color: var(--indigo);
  }
</style>