<template>
  <div>

    <div class="card">
      <header-layout>Todo List</header-layout>
      <item-list />
      <footer-layout>
        <div class="form-group d-flex">
          <input
            class="form-control me-3"
            type="text"
            v-on:keyup.enter="addItem(text)"
            placeholder="Tuliskan sesuatu..."
            v-model="text"
          >
          <button-comp
            class="btn btn-success"
            @clickAction="addItem()"
          >
            Tambahkan
          </button-comp>
        </div>
      </footer-layout>
    </div>

    <div v-show="itemList.length >= 4">
      <hebat-part />
    </div>

  </div>
</template>

<script>
import Header from '../../layouts/Header.vue';
import Footer from '../../layouts/Footer.vue';
import ItemList from './ItemList.vue';
import Hebat from './Hebat.vue';
import Button from '../../components/Button.vue';
import { mapGetters } from 'vuex';


export default {
  name: "TodoList",
  components: {
    'header-layout': Header,
    'item-list': ItemList,
    'footer-layout': Footer,
    'button-comp': Button,
    'hebat-part': Hebat,
  },

  data() {
    return {
      text: "",
    }
  },

  computed: {
    ...mapGetters({
      itemList: 'todolist/getItemList'
    })
  },

  methods: {
    addItem() {
      this.text != ""
        ? this.$store.dispatch("todolist/addItem", this.text)
        : null;
      return this.emptyInputText()
    },

    emptyInputText() {
      return this.text = ""
    },
  },
}
</script>

<style scoped>
</style>