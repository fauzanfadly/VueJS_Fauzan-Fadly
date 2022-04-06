<template>
  <div>

    <v-container class="my-5">
      <v-row>
        <v-card
          class="pa-5"
          elevation="8"
          outlined
        >
          <v-btn
            color="warning"
            outlined
            small
            @click="() => this.$router.go(-1)"
            class="mb-3"
          >
            Kembali
          </v-btn>
          <h4>{{ news.title }}</h4>
          <p class="m-0">
            {{ news.name }} <br>
            <span v-show="news.author != null" class="text-author">
              {{ news.author }}
            </span>
          </p>
          <v-divider class="my-5"></v-divider>
          <div v-if="news.urlToImage != null">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-width="800"
              max-height="450"
              :src="news.urlToImage"
            ></v-img>
          </div>
          <div v-else>
            <p class="text-center">
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-width="800"
                max-height="450"
                src="@/assets/media/images/icons/icon-no-image.png"
              />
            </p>
          </div>
          <p class="news-date m-0">
            {{ moment(news.publishedAt).locale('id').format("dddd, Do MMMM YYYY - h:mm:ss") }}
          </p>
          <v-row class="mt-3">
            <v-col md="12">
              <p>
                {{ news.description }}
              </p>
              <p>
                {{ news.content }}
              </p>
              <a :href="news.url">
                Lihat Selengkapnya...
              </a>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>

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