<template>

  <div class="row mt-3">
    <div class="col-md-1">
      <h3 class="text-blue fw-bolder">Hebat!</h3>
    </div>
    <div class="col-md-1 ps-5">
      <button-comp class="btn-outline-primary fw-bolder" @clickAction="reset()">Reset</button-comp>
    </div>
  </div>

</template>

<script>
import Button from '../../components/Button.vue'

export default {
  name: "Hebat",

  components: {
    'button-comp': Button,
  },

  methods: {
    reset() {
      return this.$store.dispatch("todolist/resetList")
    },
  },
}
</script>

<style scoped>
</style>