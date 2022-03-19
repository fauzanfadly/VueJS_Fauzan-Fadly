<template>
  <div>

    <div class="container mt-5">
      <div class="row">
        <div class="card p-0">

          <div class="card-header">
            <h2 class="text-blue fw-bolder">Todo List</h2>
          </div>

          <div class="card-body">
            <div v-if="items.length > 0">
              <ul class="list-group">
                <div v-for="(item, index) in items" :key="index">
                  <li class="list-group-item d-flex">
                    <div v-if="item.editable" class="w-100">
                      <div class="d-flex w-100">
                        <span class="my-auto me-2">{{ (index + 1) }}. </span>
                        <input
                          class="form-control"
                          type="text"
                          v-model="textEdit"
                          v-on:keyup.enter="editItem(textEdit, index)"
                          autofocus
                        >
                        <div class="cancel-btn-wrapper">
                          <button class="btn btn-sm btn-danger" v-on:click="disabledEdit()">x</button>
                          <span class="mytooltip-cancel-btn">Batal edit</span>
                        </div>
                      </div>
                    </div>
                    <div v-else class="w-100">
                      <div class="d-flex w-100">
                        <span class="my-auto me-1">{{ (index + 1) }}. </span>
                        <div class="edit-text-wrapper w-100 me-4">
                          <span class="mytooltip-input-text">Klik untuk edit teks</span>
                          <p class="my-auto w-100" v-on:click="enableEdit(index)">{{ item.text }}</p>
                        </div>
                      </div>
                    </div>
                    <span class="ms-auto d-flex">
                      <button class="btn btn-sm btn-danger me-3" v-on:click="deleteItem(index)">Hapus</button>
                      <div v-if="item.editable">
                        <button class="btn btn-warning" v-on:click="editItem(textEdit, index)">Edit</button>
                      </div>
                      <div v-else>
                        <button class="btn btn-warning" v-on:click="enableEdit(index)">Edit</button>
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

          <div class="card-footer p-3">
            <div class="form-group d-flex">
              <input
                class="form-control me-3"
                type="text"
                v-model="text"
                v-on:keyup.enter="addItem(text)"
                placeholder="Tuliskan sesuatu..."
              >
              <button class="btn btn-success" v-on:click="addItem(text)">Tambahkan</button>
            </div>
          </div>

        </div>

        <div v-if="items.length >= 4">
          <div class="row mt-3">
            <div class="col-md-1">
              <h3 class="text-blue fw-bolder">Hebat!</h3>
            </div>
            <div class="col-md-1 ps-5">
              <button class="btn btn-outline-primary fw-bolder" v-on:click="resetList()">Reset</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ToDoList",
    data() {
      return {
        items: [],
        text: "",
        textEdit: "",
      }
    },

    methods: {
      addItem(value) {
        this.checkEmptyText(value)
          ? this.items.push({ text: value, editable: false })
          : null
        return this.emptyInputText()
      },

      emptyInputText() {
        return this.text = ""
      },

      checkEmptyText(text) {
        return text.trim() != "" ? true : false
      },

      deleteItem(index) {
        return index === 0
          ? this.items.splice(index, 1)
          : this.items.splice(index, index)
      },

      editItem(value, index) {
        if (this.checkEmptyText(value)) {
          this.items[index].text = value
          return this.disabledEdit()
        }
        return null
      },

      enableEdit(index) {
        this.disabledEdit()
        this.items[index].editable = !this.items[index].editable
        return this.textEdit = this.items[index].text
      },

      disabledEdit() {
        return this.items.map((element) => {
          element.editable = false
        })
      },

      resetList() {
        return this.items = []
      }
    }
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