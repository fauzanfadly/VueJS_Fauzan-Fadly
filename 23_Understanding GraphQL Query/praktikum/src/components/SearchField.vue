<template>
  <div style="display: flex;">
    <v-col
      :cols="searchName === '' ? '12' : '11'"
      class="animate-size"
    >
      <v-text-field
        label="Cari Nama Anggota"
        outlined
        dense
        placeholder="Nama anggota..."
        v-model="searchKeyword"
        @input="findAnggota"
      />
    </v-col>
    <v-col
      v-show="searchName != ''"
      cols="1"
      class="animate-size"
    >
      <v-icon
        large
        class="clear-icon"
        color="red"
        @click="clearSearch"
      >
        mdi-close-circle
      </v-icon>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "SearchField",

  props: {
    searchName: String
  },

  data() {
    return {
      searchKeyword: ""
    }
  },

  emits: [
    'find-anggota',
  ],

  methods: {
    findAnggota () {
      return this.$emit('find-anggota', this.searchKeyword)
    },

    clearSearch () {
      this.searchKeyword = ''
      return this.$emit('find-anggota', '')
    }
  }
}
</script>

<style scoped>
.clear-icon {
  cursor: pointer;
}

.animate-size {
  transition: 0.2s all;
}
</style>
