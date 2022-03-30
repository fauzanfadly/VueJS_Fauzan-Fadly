import NewsList from '@/views/NewsList.vue'
import NewsDetail from '@/views/NewsDetail.vue'

export default [
  {
    path: "/",
    name: "All",
    component: NewsList
  },
  {
    path: "/category/:category",
    name: "Category",
    component: NewsList
  },
  {
    path: "/read/:index",
    name: "Read",
    component: NewsDetail
  },
];