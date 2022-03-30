<template>
  <div class="card-body">

    <button class="btn btn-sm btn-outline-primary back-btn mb-3" @click="() => this.$router.go(-1)">Kembali</button>

    <h4>{{ news.title }}</h4>
    <p class="m-0">
      {{ news.name }} <br>
      <span v-show="news.author != null" class="text-author">
        {{ news.author }}
      </span>
    </p>
    <hr>
    <div class="image-wrapper">
      <img v-if="news.urlToImage != null" class="img-fluid" :src="news.urlToImage">
      <p v-else class="text-center">
        <img src="@/assets/media/images/icons/icon-no-image.png" class="img-fluid">
      </p>
    </div>
    <p class="news-date m-0">
      {{ moment(news.publishedAt).locale('id').format("dddd, Do MMMM YYYY - h:mm:ss") }}
    </p>
    <div class="row mt-3">
      <div class="col-md-12">
        <p>
          {{ news.description }}
        </p>
        <p>
          {{ news.content }}
        </p>
        <a :href="news.url">
          Lihat Selengkapnya...
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "NewsDetail",

    computed: {
      ...mapGetters({
        listNews: 'listNews/getListNews',
        news: 'news/getNews'
      }),
    },

    methods: {
      getData() {
        return this.$store.dispatch("news/getReadNews", this.listNews[this.$route.params.index])
      },
    },

    mounted() {
      this.getData()
    }
  }
</script>

<style scoped>
  .image-wrapper {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 800px;
    max-height: 450px;
    overflow: hidden;
  }

  .news-date {
    font-size: 12px;
    color: rgb(100, 100, 100);
  }

  .btn-outline-primary {
    border: 2px solid var(--bs-primary);
  }

  .text-author {
    font-size: 14px;
  }

  .text-author a {
    color: rgb(60, 138, 255)
  }

  .text-author a:hover {
    color: rgb(60, 138, 255);
    text-decoration: underline;
  }

  .back-btn::before {
    content: "<- ";
  }

  .btn {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  }
</style>