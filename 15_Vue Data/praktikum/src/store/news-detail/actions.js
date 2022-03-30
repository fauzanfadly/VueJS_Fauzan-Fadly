export default {
  getReadNews(store, news) {
    store.commit('setAuthor', news.author)
    store.commit('setContent', news.content)
    store.commit('setDescription', news.description)
    store.commit('setPublishedAt', news.publishedAt)
    store.commit('setId', news.source.id)
    store.commit('setName', news.source.name)
    store.commit('setTitle', news.title)
    store.commit('setUrl', news.url)
    store.commit('setUrlToImage', news.urlToImage)
  }
}