import TodoList from '../../views/todo-list/TodoList.vue';
import ItemDetail from '../../views/item-detail/ItemDetail.vue';

export default [
  {
    path: "/",
    component: TodoList,
    // children: [
    //   {
    //     path: "/:index",
    //     component: ItemDetail
    //   },
    // ]
  },
  {
    path: "/detail/:index",
    component: ItemDetail
  },
]