<template>
  <div>

    <div class="card">
      <header-layout>Detail</header-layout>


      <form-comp
        :item="item"
        @updateValue="updateValue"
      />

      <footer-layout class="d-flex w-100 justify-content-between">
        <button-comp class="btn-success" @clickAction="editItem">
          Simpan
        </button-comp>
        <router-link to="/">
          <button-comp class="btn-warning">
            Kembali
          </button-comp>
        </router-link>
      </footer-layout>
    </div>

  </div>
</template>

<script>
import Header from '../../layouts/Header.vue'
import Footer from '../../layouts/Footer.vue'
import Button from '../../components/Button.vue'
import Form from './Form.vue'
import { mapGetters } from 'vuex';

export default {
  name: "ItemDetail",

  components: {
    'header-layout': Header,
    'footer-layout': Footer,
    'button-comp': Button,
    'form-comp' : Form,
  },

  data() {
    return {
      text: "",
      desc: "",
    }
  },

  computed: {
    ...mapGetters({
      itemList: 'todolist/getItemList'
    }),
  
    item: function() {
      return this.itemList[this.index];
    },
  
    index: function() {
      return parseInt(this.$route.params.index);
    }
  },

  methods: {
    updateValue(params) {
      this.text = params.text;
      this.desc = params.desc;
    },

    editItem() {
      const params = { index: this.index, text: this.text, desc: this.desc };
      if (params.text != "") {
        this.$store.dispatch("todolist/editItemDetail", params)
      }
    }
  },

}
</script>

<style scoped>
</style>