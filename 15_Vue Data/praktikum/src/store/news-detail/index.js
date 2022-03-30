import actions from './actions';

const state = () => ({
  author: "",
  content: "",
  description: "",
  publishedAt: "",
  id: "",
  name: "",
  title: "",
  url: "",
  urlToImage: ""
});

const mutations = {
  setAuthor(state, params) {
    state.author = params;
  },
  setContent(state, params) {
    state.content = params;
  },
  setDescription(state, params) {
    state.description = params;
  },
  setPublishedAt(state, params) {
    state.publishedAt = params;
  },
  setId(state, params) {
    state.id = params;
  },
  setName(state, params) {
    state.name = params;
  },
  setTitle(state, params) {
    state.title = params;
  },
  setUrl(state, params) {
    state.url = params;
  },
  setUrlToImage(state, params) {
    state.urlToImage = params;
  },
}

const getters = {
  getNews(state) {
    return {
      author: state.author,
      content: state.content,
      description: state.description,
      publishedAt: state.publishedAt,
      id: state.id,
      name: state.name,
      title: state.title,
      url: state.url,
      urlToImage: state.urlToImage
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}