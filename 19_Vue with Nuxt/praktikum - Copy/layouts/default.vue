<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      color="sideBarColor"
      :mini-variant="miniVariant"
      :clipped="clipped"
      dark
      fixed
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon
              v-if="!darkMode"
              color="iconDrawer"
            >
              mdi-white-balance-sunny
            </v-icon>
            <v-icon
              v-else
              color="iconDrawer"
            >
              mdi-weather-night
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <v-switch
                v-model="darkMode"
                color="iconDrawer"
                class="mt-5 ps-3"
                dense
                :label="darkMode ? 'Dark' : 'Light'"
                :messages="darkMode ? 'Switch to light mode' : 'Switch to dark Mode'"
                @click="switchDarkMode"
              />
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item
          v-for="(menu, index) in menus"
          :key="index"
          :to="menu.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon
              color="iconDrawer"
            >
              {{ menu.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="menu.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      color="appBarColor"
      dark
      app
    >
      <v-btn
        icon
        @click.stop="drawer = !drawer"
      >
        <v-icon color="iconDrawer">
          mdi-view-headline
        </v-icon>
      </v-btn>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon color="iconDrawer">
          mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
        </v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon color="iconDrawer">
          mdi-application
        </v-icon>
      </v-btn>
      <v-toolbar-title class="font-weight-bold" v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import dataMenus from '@/values/menus'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      menus: dataMenus,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "BERITA'IN"
    }
  },

  computed: {
    darkMode () {
      return this.$vuetify.theme.dark
    }
  },

  methods: {
    switchDarkMode () {
      this.$vuetify.theme.dark = !this.darkMode
    }
  }
}
</script>
