<template>
  <v-row justify="center" align="center" class="my-5">
    <v-col
      cols="10"
    >
      <v-card
        class="pa-5"
        elevation="8"
        width="100%"
        outlined
      >
        <v-row>
          <v-col>
            <v-text-field
              v-model="searchKeyword"
              :background-color="darkMode ? 'rgb(255, 166, 0, 0.10)' : 'grey lighten-4'"
              placeholder="Cari Berita..."
              color="deep-orange"
              outlined
              clearable
              dense
              @keyup.enter="getSearchedNews()"
            />
          </v-col>
          <v-col
            cols="auto"
          >
            <v-btn
              color="btnOutline"
              outlined
              elevation="4"
              @click="getSearchedNews()"
            >
              Cari
            </v-btn>
          </v-col>
        </v-row>
        <v-divider />
        <v-container
          fluid
          class="pa-0 mt-1"
        >
          <div v-if="isLoading">
            <v-row class="mt-5 ms-5">
              <v-col
                v-for="(n, index) in 4"
                :key="index"
                md="6"
              >
                <v-row>
                  <v-col
                    sm="11"
                    md="7"
                    lg="3"
                  >
                    <v-skeleton-loader
                      width="200"
                      height="125"
                      type="image"
                    />
                  </v-col>
                  <v-col class="ms-auto">
                    <v-skeleton-loader
                      width="200"
                      type="article"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div v-else class="mt-5 mx-5">
            <v-row>
              <v-col
                v-for="(news, index) in listNews"
                :key="index"
                md="6"
                class="my-2 news-item-wrapper"
              >
                <v-row>
                  <v-col cols="12">
                    <v-img
                      v-if="news.urlToImage != null"
                      :src="news.urlToImage"
                      max-height="150"
                    />
                    <v-img
                      v-else
                      src="@/assets/media/images/icons/icon-no-image.png"
                      max-height="150"
                    />
                  </v-col>
                  <v-col>
                    <p class="news-title m-0">
                      <b>{{ news.title }}</b>
                    </p>
                    <p class="news-desc m-0">
                      {{ news.description }}
                    </p>
                    <v-row justify="space-between" class="ps-3 px-5 py-1">
                      <v-col cols="auto">
                        <p class="news-date grey--text">
                          {{ $moment(news.publishedAt).format("Do MMMM, YYYY") }}
                        </p>
                      </v-col>
                      <v-col cols="auto">
                        <v-btn
                          small
                          color="btn"
                          class="white--text"
                          @click="redirectReadNews(index)"
                        >
                          Read More
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div v-if="listNews.length === 0 && !isLoading" class="py-5 mt-3 mx-auto">
            <v-row justify="center" class="my-3">
              <v-icon
                color="orange"
                size="50"
              >
                mdi-text-box-remove-outline
              </v-icon>
            </v-row>
            <p class="text-center">
              Maaf terjadi kesalahan, berita yang anda cari tidak ditemukan
            </p>
          </div>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import * as api from '@/values/api'

export default {
  name: 'NewsList',
  emits: [
    'get-no-keyword'
  ],

  data () {
    return {
      searchKeyword: ''
    }
  },

  computed: {
    listNews () {
      return this.$store.state.listNews.list
    },
    isLoading () {
      return this.$store.state.listNews.isLoading
    },
    getCategory () {
      return this.$route.params.category
    },
    darkMode () {
      return this.$vuetify.theme.dark
    }
  },

  mounted () {
    this.searchKeyword = ''
  },

  methods: {
    getSearchedNews () {
      if (this.searchKeyword === '') {
        return this.$emit('get-no-keyword')
      }
      this.$store.dispatch('listNews/fetchData', {
        end: api.topHeadlines,
        params: {
          q: this.searchKeyword,
          category: this.getCategory != null ? this.getCategory : null,
          from: '2022-03-27',
          to: '2022-03-27',
          sortBy: 'popularity',
          apiKey: api.apiKey,
          country: 'id'
        }
      })
    },

    redirectReadNews (newsIndex) {
      return this.$router.push({
        path: '/' + newsIndex.toString(),
        params: { id: newsIndex }
      })
    }
  }
}
</script>

<style scoped>
  .news-item-wrapper {
    border-radius: 15px;
  }

  .news-item-wrapper:hover {
    background-color: rgba(255, 166, 0, 0.25);
    transition: all 0.4s;
  }

  .news-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .news-desc {
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .news-date {
    font-size: 12px;
  }
</style>
