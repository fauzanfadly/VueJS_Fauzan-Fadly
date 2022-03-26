<template>
  <div class="card-body">

    <div class="form-group">
      <label for="" class="fw-bolder">Judul :</label>
      <input type="text" class="form-control" v-model="text" @change="updateValue()">
    </div>
    <div class="form-group mt-3">
      <label for="" class="fw-bolder">Deskripsi :</label>
      <textarea class="form-control" v-model="desc" @change="updateValue()" placeholder="Belum ada deskripsi..."></textarea>
    </div>

  </div>
</template>

<script>

export default {
  name: "Form",

  data() {
    return {
      text: this.item.text,
      desc: this.item.desc,
    }
  },

  props: {
    item: Object
  },

  emits: [
    "updateValue",
  ],

  beforeMount() {
    this.updateValue()
  },

  methods: {
    updateValue() {
      const params = { text: this.text, desc: this.desc }
      if (params.text != "") {
        this.$emit("updateValue", params)
      } else {
        this.text = this.item.text
      }
    },
  },

}
</script>

<style scoped>
</style>