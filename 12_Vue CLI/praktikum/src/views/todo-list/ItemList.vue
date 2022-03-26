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
                  v-model="editText"
                  @keyup.enter="editItem(index)"
                  @keyup.esc="disableEdit()"
                  autofocus
                >
                <div class="cancel-btn-wrapper">
                  <button-comp class="btn-sm btn-danger" @clickAction="disableEdit()">x</button-comp>
                  <span class="mytooltip-cancel-btn">Batal edit</span>
                </div>
              </div>
            </div>
            <div v-else class="w-100">
              <div class="d-flex w-100">
                <span class="my-auto me-1">{{ (index + 1) }}. </span>
                <div class="edit-text-wrapper w-100 me-4">
                  <span class="mytooltip-input-text">Klik untuk lihat detail item</span>
                  <router-link :to="'/detail/' + index.toString()" style="text-decoration: none">
                    <div class="item-text-wrapper col-12 text-truncate">
                      {{ item.text }}
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <span class="ms-auto d-flex">
              <button-comp class="btn-sm btn-danger me-3" @clickAction="deleteItem(index)">Hapus</button-comp>
              <div v-if="item.editable">
                <button-comp class="btn-warning" @clickAction="editItem(index)">Edit</button-comp>
              </div>
              <div v-else>
                <button-comp class="btn-warning" @clickAction="enableEdit(index)">Edit</button-comp>
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
import Button from '../../components/Button.vue';
import { mapGetters } from 'vuex';

export default {
  name: "ItemList",

  components: {
    'button-comp': Button,
  },

  data() {
    return {
      editText: "",
    }
  },

  computed: {
    ...mapGetters({
      itemList: 'todolist/getItemList'
    })
  },

  methods: {
    editItem(indexParam) {
      const params = { index: indexParam, text: this.editText };
      if (params.text != "") {
        this.$store.dispatch("todolist/editItemText", params);
      } else {
        this.editText = this.itemList[indexParam].text
      }
      return this.disableEdit();
    },

    deleteItem(index) {
      return this.$store.dispatch("todolist/deleteItem", index);
    },

    enableEdit(index) {
      this.disableEdit();
      this.$store.dispatch("todolist/enableEdit", index);
      return this.editText = this.itemList[index].text;
    },

    disableEdit() {
      this.$store.dispatch("todolist/disableEdit");
    },
  },
}
</script>

<style scoped>
  .list-group-item .item-text-wrapper {
    padding: 6px;
    cursor: pointer;
    color: black;
  }

  @media only screen and (min-width: 1400px) {
    .list-group-item .item-text-wrapper {
      width: 1045px;
    }
  }

  @media (min-width: 1200px) and (max-width: 1399px) {
    .list-group-item .item-text-wrapper {
      width: 870px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .list-group-item .item-text-wrapper {
      width: 690px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .list-group-item .item-text-wrapper {
      width: 450px;
    }
  }

  @media (min-width: 540px) and (max-width: 767px) {
    .list-group-item .item-text-wrapper {
      width: 270px;
    }
  }

  @media (max-width: 539px) {
    .list-group-item .item-text-wrapper {
      width: 80px;
    }
  }

  .list-group-item:hover .item-text-wrapper {
    border: 1px solid grey !important;
    border-radius: 5px !important;
    color: var(--bs-primary);
    padding: 5px;
  }

  .item-text-wrapper {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-group-item input {
    box-shadow: 0px 0px 3px var(--bs-warning);
  }

  .list-group-item input:focus {
    box-shadow: 0px 0px 2px var(--bs-primary);
  }

  .edit-text-wrapper {
    position: relative;
    cursor: pointer;
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