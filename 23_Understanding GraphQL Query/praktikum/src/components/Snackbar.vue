<template>
  <div>
    <v-snackbar
      v-for="(snackbar, index) in stackSnackbar" :key="index"
      :style="{'top': calcMargin(index)}"
      v-model="snackbar.show"
      :color="snackbar.color"
      dark
      :timeout="3000"
      right
      top
      shaped
    >
      {{ snackbar.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="removeSnackbar (index)"
        >
          Tutup
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import EventBus, { ACTIONS } from "@/EventBus/index";

export default {
  name: "Snackbar",

  data() {
    return {
      stackSnackbar: []
    }
  },

  methods: {
    removeSnackbar (index) {
      return this.stackSnackbar.splice(index, 1)
    },

    calcMargin(index) {
      return (index * 60) + 'px'
    },
  },

  mounted() {
    EventBus.$on(ACTIONS.SNACKBAR, (data) => {
      this.stackSnackbar.push({
        message: data.message,
        color: data.color,
        show: true
      })
      setTimeout(() => {
        this.stackSnackbar.splice(0, 1)
      }, 3000)
    })
  },
}
</script>