<template>
  <div class="card-body">

    <div class="row">
      <div class="col-auto">
        <p class="mt-2">Cari Berita :</p>
      </div>
      <div class="col">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Ketikkan Pencarian..." v-model="searchKeyword" @keyup.enter="getSearchedNews()">
        </div>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="getSearchedNews()">
          Cari
        </button>
      </div>
    </div>
    <div class="container-fluid p-0 mt-1">
      <div class="row">
        <div v-if="isLoading" class="d-flex w-100 justify-content-center py-5">
          <LoadingAnimation></LoadingAnimation>
        </div>
        <div
          v-else
          class="col-md-6 my-2 news-item-wrapper"
          @click="redirectReadNews('Read', index)"
          v-for="(news, index) in listNews" :key="index"
        >
          <div class="row">
            <div class="col-5">
              <img v-if="news.urlToImage != null" class="img-fluid" :src="news.urlToImage">
              <img v-else class="img-fluid" src="@/assets/media/images/icons/icon-no-image.png">
            </div>
            <div class="col">
              <p class="news-title m-0"><b>{{ news.title }}</b></p>
              <p class="news-desc m-0">{{ news.description }}</p>
              <p class="news-date text-secondary">{{ moment(news.publishedAt).locale('id').format("Do MMMM, YYYY") }}</p>
            </div>
          </div>
        </div>
        <div v-if="listNews.length === 0 && !isLoading" class="py-5 w-100">
          <p class="text-center">
            <img class="img-fluid" style="max-width: 100px;" src="../assets/media/images/icons/icon-no-data-blue.png" alt="No News Found">
          </p>
          <p class="text-center">Maaf terjadi kesalahan, Data yang anda cari tidak ditemukan</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import * as api from '@/values/api'
  import { mapGetters } from 'vuex'
  import LoadingAnimation from '../components/LoadingAnimation.vue'

  export default {
    name: "NewsList",

    data() {
      return {
        searchKeyword: "",
      }
    },

    components: {
      LoadingAnimation
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
            from: "2022-03-27",
            to: "2022-03-27",
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
            from: "2022-03-27",
            to: "2022-03-27",
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
        this.getData();
      },
    },

    watch: {
      '$route.path': function() {
        this.init_component();
      }
    },

    created() {
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

  .btn-outline-primary {
    border: 2px solid var(--bs-primary);
  }

  .btn {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  }

  .news-date {
    font-size: 12px;
    color: rgb(100, 100, 100);
  }
</style>