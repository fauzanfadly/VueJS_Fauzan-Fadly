<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">

        <div class="card">
          <Header />
          <TodoList
            @editItem="editItem"  
            @editItemOnKey="editItem"
            @disabledEdit="disabledEdit"
            @disabledEditOnKey="disabledEdit"
            @enableEdit="enableEdit"
            @enableEditOnTapList="enableEdit"
            @deleteItem="deleteItem"
            :itemList="itemList"
          />
          <Footer />
        </div>

        <div v-show="itemList.length >= 4">
          <div class="row mt-3">
            <div class="col-md-1">
              <h3 class="text-blue fw-bolder">Hebat!</h3>
            </div>
            <div class="col-md-1 ps-5">
              <Button class="btn-outline-primary fw-bolder" @clickAction="resetList()">Reset</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Header from '../layouts/Header.vue';
import TodoList from '../components/TodoList.vue';
import Footer from '../layouts/Footer.vue';
import Button from '../components/Button.vue';
import * as todoValues from '../values/todoListValues';
import * as todoFunc from '../utils/todoListFunction';

export default {
  name: "Main",
  components: {
    Header,
    TodoList,
    Footer,
    Button,
  },
  data() {
    return {
      itemList: todoValues.itemList,
      textOnInput: ""
    }
  },
  updated() {
    this.itemList = todoValues.itemList
  },
  methods: {
    editItem(params) {
      return todoFunc.editItem(params.value, params.index)
    },

    enableEdit(index) {
      todoFunc.enableEdit(index)
    },

    disabledEdit() {
      return todoFunc.disabledEdit()
    },

    deleteItem(index) {
      return todoFunc.deleteItem(index)
    },

    resetList() {
      return todoValues.itemList.splice(0, todoValues.itemList.length)
    }
  },
}
</script>

<style scoped>
</style>