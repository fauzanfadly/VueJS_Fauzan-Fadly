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

    <div class="card mt-5">
      <header-layout>Currency Test</header-layout>
      <div class="card-body">
        <p>Show with format : {{ formatIDR }}</p>
        <p>Data to send : {{ money }}</p>
      </div>
      <footer-layout>
        <div class="form-group d-flex">
          <input
            ref="inputRef"
            class="form-control me-3"
            type="text"
            v-model="money"
            placeholder="Your Money"
          >
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
import { useCurrencyInput } from 'vue-currency-input'

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
      money: 0,
      inputMoney: ''
    }
  },

  setup() {
    const { inputRef } = useCurrencyInput({ currency: 'IDR' })
    return { inputRef }
  },

  computed: {
    ...mapGetters({
      itemList: 'todolist/getItemList'
    }),
    getMoney () {
      return this.money.isNaN ? 0 : this.money
    },
    formatIDR () {
      return Intl.NumberFormat().format(this.money)
    }
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