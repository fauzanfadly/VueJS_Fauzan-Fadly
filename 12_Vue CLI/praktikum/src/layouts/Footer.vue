<template>

  <div class="card-footer">
    <div class="form-group d-flex">
      <input
        class="form-control me-3"
        type="text"
        v-on:keyup.enter="addItem(text)"
        placeholder="Tuliskan sesuatu..."
        v-model="text"
      >
      <Button
        class="btn-success"
        @clickAction="addItem(text)"
      >
        Tambahkan
      </Button>
    </div>
  </div>

</template>

<script>
import Button from '../components/Button.vue';
import * as todoFunc from '../utils/todoListFunction';

export default {
  name: "Footer",

  props: {
    addItemModel: String
  },

  components: {
    Button,
  },

  data() {
    return {
      text: ""
    }
  },

  methods: {
    addItem() {
      todoFunc.addItem(this.text)
      return this.emptyInputText()
    },

    emptyInputText() {
      return this.text = ""
    }
  },
}
</script>

<style scoped>
</style>