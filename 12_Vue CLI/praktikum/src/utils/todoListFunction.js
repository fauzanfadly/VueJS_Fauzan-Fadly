import * as todoValues from '../values/todoListValues';

export const addItem = (value) => {
  return checkEmptyText(value)
    ? todoValues.itemList.push({ text: value, editable: false })
    : null
}

export const enableEdit = (index) => {
  disabledEdit();
  return todoValues.itemList[index].editable = !todoValues.itemList[index].editable;
}

export const disabledEdit = () => {
  todoValues.itemList.map((element) => {
    return element.editable = false;
  });
}

export const editItem = (value, index) => {
  if (checkEmptyText(value)) {
    todoValues.itemList[index].text = value;
    return disabledEdit();
  }
  return;
}

export const deleteItem = (index) => {
  return index === 0
    ? todoValues.itemList.splice(index, 1)
    : todoValues.itemList.splice(index, index)
}

export const checkEmptyText = (text) => {
  return text.trim() != "" ? true : false
}

export const resetList = () => {
  return todoValues.itemList = []
}