<template>
  <div>
    <v-container class="my-5">
      <v-row>
        <v-card
          class="pa-5"
          elevation="8"
          width="100%"
          outlined
        >
          <v-row>
            <v-col cols="auto" class="pe-0">
              <p class="mt-2">Cari Berita :</p>
            </v-col>
            <v-col>
              <v-text-field
                v-model="searchKeyword"
                @keyup.enter="getSearchedNews()"
                placeholder="Ketikkan Pencarian..."
                outlined
                clearable
                class="my-text-field"
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="auto" class="ps-0">
              <v-btn
                color="primary"
                outlined
                @click="getSearchedNews()"
                elevation="4"
              >
                Cari
              </v-btn>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-container fluid class="pa-0 mt-1">
            <v-row>
              <div v-if="isLoading">
                <v-row class="mt-5 ms-5">
                  <v-col
                    md="6"
                    v-for="(n, index) in 4" :key="index"
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
                        ></v-skeleton-loader>
                      </v-col>
                      <v-col class="ms-auto">
                        <v-skeleton-loader
                          width="200"
                          type="article"
                        ></v-skeleton-loader>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
              <div v-else class="mt-5 mx-5">
                <v-row>
                  <v-col
                    md="6"
                    class="my-2 news-item-wrapper"
                    v-for="(news, index) in listNews" :key="index"
                  >
                    <v-row>
                      <v-col
                        sm="11"
                        md="7"
                        lg="3"
                      >
                        <v-img
                          v-if="news.urlToImage != null"
                          :src="news.urlToImage"
                          max-width="300"
                        />
                        <v-img
                          v-else
                          src="@/assets/media/images/icons/icon-no-image.png"
                          max-width="300"
                        />
                      </v-col>
                      <v-col>
                        <p class="news-title m-0"><b>{{ news.title }}</b></p>
                        <p class="news-desc m-0">{{ news.description }}</p>
                        <v-row justify="space-between" class="ps-3 px-5 py-1">
                          <p class="news-date text-secondary">{{ moment(news.publishedAt).locale('id').format("Do MMMM, YYYY") }}</p>
                          <v-btn
                            small
                            color="primary"
                            @click="redirectReadNews('Read', index)"
                          >
                            Read More
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
              <div v-if="listNews.length === 0 && !isLoading" class="py-5 mt-3 mx-auto">
                <v-img
                  src="../assets/media/images/icons/icon-no-data-blue.png"
                  alt="No Image"
                  max-width="100"
                  class="mx-auto mb-5"
                />
                <p class="text-center">Maaf terjadi kesalahan, Data yang anda cari tidak ditemukan</p>
              </div>
            </v-row>
          </v-container>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import * as api from '@/values/api'
  import { mapGetters } from 'vuex'

  export default {
    name: "NewsList",

    data() {
      return {
        searchKeyword: "",
      }
    },

    computed: {
      ...mapGetters({
        listNews: 'listNews/getListNews',
        isLoading: 'listNews/getLoading',
      }),
    },

    methods: {
      getData() {
        this.$store.dispatch("listNews/fetchData", {
          end: api.topHeadlines,
          params: {
            category: this.$route.params.category != null ? this.$route.params.category : null,
            from: "2023-13-10",
            to: "2023-13-10",
            sortBy: "popularity",
            apiKey: api.apiKey,
            country: "id",
          }
        })
      },

      getSearchedNews() {
        if (this.searchKeyword === "") {
          return this.getData()
        }
        this.$store.dispatch("listNews/fetchData", {
          end: api.topHeadlines,
          params: {
            q: this.searchKeyword,
            category: this.$route.params.category != null ? this.$route.params.category : null,
            from: "2023-13-10",
            to: "2023-13-10",
            sortBy: "popularity",
            apiKey: api.apiKey,
            country: "id",
          }
        })
      },

      redirectReadNews(pathName, newsIndex) {
        return this.$router.push({
          name: pathName,
          params: { index: newsIndex}
        })
      },

      init_component() {
        this.searchKeyword = ""
        this.getData();
      },
    },

    watch: {
      '$route.path': function() {
        this.init_component();
      }
    },

    mounted() {
      this.init_component();
    },
  }
</script>

<style scoped>
  .image-wrapper {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 175px;
    max-height: 150px;
  }

  .news-item-wrapper {
    cursor: pointer;
    border-radius: 15px;
  }

  .news-item-wrapper:hover {
    background-color: rgba(173, 216, 230, 0.25);
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
    color: rgb(100, 100, 100);
  }
</style>