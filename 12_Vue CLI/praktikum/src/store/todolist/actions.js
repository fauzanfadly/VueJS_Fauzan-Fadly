export default {
  addItem(store, text) {
    const params = { text: text, desc: "", editable: false };
    return store.commit("add", params);
  },

  editItemText(store, item) {
    const params = { index: item.index, text: item.text };
    return store.commit("update", params);
  },

  editItemDetail(store, item) {
    const params = { index: item.index, text: item.text, desc: item.desc };
    return store.commit("update", params);
  },

  deleteItem(store, index) {
    return store.commit("delete", index);
  },

  enableEdit(store, index) {
    return store.commit("updateEditable", index);
  },

  disableEdit(store, index) {
    return store.commit("disableEdit", index);
  },

  resetList(store) {
    return store.commit("reset");
  }
}