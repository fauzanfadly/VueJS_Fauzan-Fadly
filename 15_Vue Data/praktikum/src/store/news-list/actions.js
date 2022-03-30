import axios from 'axios';
import * as api from '@/values/api';

export default {
  async fetchData(store, payload) {
    await store.commit("setLoading", true)
    await store.commit("setListNews", [])
    await axios.get(api.entry + payload.end, { params: payload.params })
      .then((response) => store.commit("setListNews", response.data.articles),)
      .finally(() => store.commit("setLoading", false))
  },
}