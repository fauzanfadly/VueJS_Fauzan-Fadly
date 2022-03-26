export default {
  add(state, params) {
    return state.itemList.push(params)
  },

  update(state, params) {
    state.itemList[params.index].text = (params.text != null ? params.text : state.itemList[params.index].text);
    state.itemList[params.index].desc = (params.desc != null ? params.desc : state.itemList[params.index].desc);
  },

  updateEditable(state, index) {
    return state.itemList[index].editable = !(state.itemList[index].editable);
  },

  delete(state, index) {
    return state.itemList.splice(index, 1);
  },

  disableEdit(state) {
    return state.itemList.map((el) => {
      return el.editable = false;
    });
  },

  reset(state) {
    return state.itemList.splice(0, state.itemList.length);
  }
};