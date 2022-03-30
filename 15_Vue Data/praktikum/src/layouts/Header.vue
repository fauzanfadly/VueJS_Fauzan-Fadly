<template>
  <div class="card-header">

    <h3><b>BERITA'IND</b></h3>
    <div class="row">

      <div
        :class="'col-auto ' + (activeCategory == null ? 'active-category' : (activeCategory === '' ? 'active-category' : ''))"
        @click="redirect('All')"
      >All</div>
      <div
        :class="'col-auto ' + (activeCategory === 'business' ? 'active-category' : '')"
        @click="redirectWithCategory('Category', 'business')"
      >Bisnis</div>
      <div
        :class="'col-auto ' + (activeCategory === 'entertainment' ? 'active-category' : '')"
        @click="redirectWithCategory('Category', 'entertainment')"
      >Entertainment</div>
      <div
        :class="'col-auto ' + (activeCategory === 'technology' ? 'active-category' : '')"
        @click="redirectWithCategory('Category', 'technology')"
      >Teknologi</div>
      <div
        :class="'col-auto ' + (activeCategory === 'sport' ? 'active-category' : '')"
        @click="redirectWithCategory('Category', 'sport')"
      >Olahraga</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      activeCategory: ""
    }
  },

  methods: {
    redirect(pathName) {
      return this.$router.push({
        name: pathName
      })
    },

    redirectWithCategory(pathName, paramCategory) {
      this.$router.push({
        name: pathName,
        params: { category: paramCategory }
      })
    },

    setActiveCategory() {
      this.activeCategory = this.$route.params.category
    }
  },

  watch: {
    '$route.path': function() {
      this.setActiveCategory();
    }
  },
}
</script>

<style scoped>
  h3 {
    color: rgba(0, 116, 182, 1);
  }

  .row .col-auto {
    cursor: pointer;
    padding-bottom: 2px;
  }

  .row .col-auto:hover {
    color: rgb(80, 164, 192);
    font-weight: bold;
    border-bottom: 2px solid lightblue;
    padding-bottom: 0;
  }

  .active-category {
    color: rgb(80, 164, 192);
    font-weight: bold;
    border-bottom: 2px solid lightblue;
    padding-bottom: 2px !important;
  }
</style>