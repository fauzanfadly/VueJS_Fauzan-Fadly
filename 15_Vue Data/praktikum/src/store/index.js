import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import listNews from './news-list';
import news from './news-detail';

Vue.use(Vuex);

const persistedDataState = createPersistedState({
  paths: ['listNews', 'news']
});

export default new Vuex.Store({
  strict: true,
  plugins: [persistedDataState],
  modules: {
    listNews: {
      namespaced: true,
      ...listNews
    },
    news: {
      namespaced: true,
      ...news
    },
  }
});
