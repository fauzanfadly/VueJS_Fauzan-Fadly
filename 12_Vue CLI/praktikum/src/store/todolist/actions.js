export default {
  addItem(store, text) {
    let list = store.getters.getItemList;
    const params = { text: text, desc: "", editable: false };
    list.push(params);
    return store.commit("seIitemList", list);
  },

  editItemText(store, item) {
    let list = store.getters.getItemList;
    list[item.index].text = item.text;
    return store.commit("seIitemList", list);
  },

  editItemDetail(store, item) {
    let list = store.getters.getItemList;
    list[item.index].text = item.text;
    list[item.index].desc = item.desc;
    return store.commit("seIitemList", list);
  },

  deleteItem(store, index) {
    let list = store.getters.getItemList;
    list.splice(index, 1);
    return store.commit("seIitemList", list);
  },

  enableEdit(store, index) {
    let list = store.getters.getItemList;
    list[index].editable = !list[index].editable;
    return store.commit("seIitemList", list);
  },

  disableEdit(store) {
    let list = store.getters.getItemList;
    list.map((el) => {
      el.editable = false;
    });
    return store.commit("seIitemList", list);
  },

  resetList(store) {
    return store.commit("seIitemList", []);
  }
}