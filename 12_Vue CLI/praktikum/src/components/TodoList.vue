<template>

  <div class="card-body">
    <div v-if="itemList.length > 0">
      <ul class="list-group">
        <div v-for="(item, index) in itemList" :key="index">
          <li class="list-group-item d-flex">
            <div v-if="item.editable" class="w-100">
              <div class="d-flex w-100">
                <span class="my-auto me-2">{{ (index + 1) }}. </span>
                <input
                  class="form-control"
                  type="text"
                  v-model="textEdit"
                  @keyup.enter="editItemOnKey(textEdit, index)"
                  @keyup.esc="disabledEditOnKey()"
                  autofocus
                >
                <div class="cancel-btn-wrapper">
                  <Button class="btn-sm btn-danger" @clickAction="disabledEdit()">x</Button>
                  <span class="mytooltip-cancel-btn">Batal edit</span>
                </div>
              </div>
            </div>
            <div v-else class="w-100">
              <div class="d-flex w-100">
                <span class="my-auto me-1">{{ (index + 1) }}. </span>
                <div class="edit-text-wrapper w-100 me-4">
                  <span class="mytooltip-input-text">Klik untuk edit teks</span>
                  <p class="my-auto w-100" @click="enableEditOnTapList(index)">{{ item.text }}</p>
                </div>
              </div>
            </div>
            <span class="ms-auto d-flex">
              <button class="btn btn-sm btn-danger me-3" @click="deleteItem(index)">Hapus</button>
              <div v-if="item.editable">
                <Button class="btn-warning" @clickAction="editItem(textEdit, index)">Edit</Button>
              </div>
              <div v-else>
                <Button class="btn-warning" @clickAction="enableEdit(index)">Edit</Button>
              </div>
            </span>
          </li>
        </div>
      </ul>
    </div>
    <div v-else>
      <p>Item masih kosong!</p>
    </div>
  </div>

</template>

<script>
import Button from '../components/Button.vue';

export default {
  name: "TodoList",

  components: {
    Button
  },

  props: {
    itemList: {
      type: Array,
      require: true,
    },
  },

  emits: [
    'editItem',
    'editItemOnKey',
    'disabledEdit',
    'disabledEditOnKey',
    'enableEdit',
    'enableEditOnTapList',
    'deleteItem',
  ],

  data() {
    return {
      textEdit: "",
    }
  },

  methods: {
    editItem(textEdit, index) {
      const data = {value: textEdit, index: index}
      this.$emit('editItem', data)
    },

    editItemOnKey(textEdit, index) {
      const data = {value: textEdit, index: index}
      this.$emit('editItemOnKey', data)
    },

    disabledEdit() {
      this.$emit('disabledEdit')
    },

    disabledEditOnKey() {
      this.$emit('disabledEditOnKey')
    },

    enableEdit(index) {
      this.$emit('enableEdit', index)
      return this.textEdit = this.itemList[index].text
    },

    enableEditOnTapList(index) {
      this.textEdit = this.$emit('enableEditOnTapList', index)
      return this.textEdit = this.itemList[index].text
    },

    deleteItem(index) {
      this.$emit('deleteItem', index)
    },
  },
}
</script>

<style scoped>
  .list-group-item p {
    padding: 6px;
  }

  .list-group-item p:hover {
    border: 1px solid grey;
    border-radius: 5px;
    color: var(--bs-primary);
    padding: 5px;
  }

  .list-group-item input {
    box-shadow: 0px 0px 3px var(--bs-warning);
  }

  .list-group-item input:focus {
    box-shadow: 0px 0px 2px var(--bs-primary);
  }

  .edit-text-wrapper {
    position: relative;
  }

  .mytooltip-input-text {
    background-color: rgb(83, 83, 83);
    display: none;
    height: fit-content;
    white-space: nowrap;
    color: white;
    font-size: 12px;
    margin: 0;
    padding: 5px;
    border-radius: 10px;
    position: absolute;
    left: 0px;
    top: -25px;
  }

  .list-group-item .edit-text-wrapper:hover .mytooltip-input-text {
    display: initial;
  }

  .mytooltip-cancel-btn {
    background-color: rgb(83, 83, 83);
    display: none;
    height: fit-content;
    white-space: nowrap;
    color: white;
    font-size: 12px;
    margin: 0;
    padding: 5px;
    border-radius: 10px;
    position: absolute;
    right: -20px;
    top: -30px;
  }

  .cancel-btn-wrapper {
    position: relative;
    right: 35px;
    top: 5px;
  }

  .cancel-btn-wrapper button {
    padding: 0px 7px;
    padding-bottom: 3px;
    border-radius: 100px;
    height: fit-content;
    vertical-align: baseline;
  }

  .cancel-btn-wrapper button:hover + .mytooltip-cancel-btn {
    display: initial;
  }
</style>