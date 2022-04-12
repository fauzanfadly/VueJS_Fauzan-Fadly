<template>
  <v-row justify="center" align="center" class="my-5">
    <v-col
      cols="10"
      sm="10"
      md="10"
      lg="10"
    >
      <v-card
        class="pa-5"
        elevation="8"
        width="100%"
        outlined
      >
        <v-btn
          outlined
          color="btn"
          small
          class="mb-3"
          @click="() => $router.go(-1)"
        >
          Kembali
        </v-btn>
        <v-card-title v-text="news.title" />
        <v-card-subtitle class="py-0">
          <span v-show="news.source.name != null">
            {{ news.source.name }}
            <br>
          </span>
          <span v-show="news.author != null" class="text-author">
            {{ news.author }}
          </span>
        </v-card-subtitle>
        <v-divider class="my-5" />
        <v-row justify="center">
          <v-col class="px-7">
            <div v-if="news.urlToImage != null">
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                height="400"
                :src="news.urlToImage"
              />
            </div>
            <div v-else>
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                height="400"
                src="@/assets/media/images/icons/icon-no-image.png"
              />
            </div>
          </v-col>
        </v-row>
        <v-card-subtitle
          v-text="$moment(news.publishedAt).format('dddd, Do MMMM YYYY - h:mm:ss')"
        />
        <v-card-text class="pb-0" v-text="news.description" />
        <v-card-text v-text="news.content" />
        <a :href="news.url" class="px-4">
          Lihat Selengkapnya...
        </a>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'NewsDetail',
  head: {
    title: 'Detail | News App'
  },

  computed: {
    listNews () {
      return this.$store.state.listNews.list
    },
    news () {
      return this.$store.state.detailNews.news
    },
    id () {
      return this.$route.params.id
    }
  },

  created () {
    this.getDetail()
  },

  methods: {
    getDetail () {
      return this.$store.dispatch('detailNews/getDetail', this.listNews[this.id])
    }
  }
}
</script>
