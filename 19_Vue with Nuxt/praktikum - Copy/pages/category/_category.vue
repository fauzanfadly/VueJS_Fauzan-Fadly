<template>
  <NewsList @get-no-keyword="getData" />
</template>

<script>
import * as api from '@/values/api'

export default {
  name: 'NewsListCategory',

  head: {
    title: 'Category | News App'
  },

  computed: {
    getCategory () {
      return this.$route.params.category
    }
  },

  mounted () {
    this.getData()
  },

  methods: {
    getData () {
      this.$store.dispatch('listNews/fetchData', {
        end: api.topHeadlines,
        params: {
          category: this.getCategory,
          from: '2022-03-27',
          to: '2022-03-27',
          sortBy: 'popularity',
          apiKey: api.apiKey,
          country: 'id'
        }
      })
    }
  }
}
</script>
