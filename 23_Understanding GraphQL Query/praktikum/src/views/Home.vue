<template>
  <div>
    <HelloWorld msg="Daftar Anggota"/>

    <v-container class="my-5">
      <v-row justify="center">
        <v-col
          v-if="getAllAnggotas.length > 0"
          cols="12"
          sm="10"
          md="10"
          lg="10"
        >
          <SearchField
            :searchName="searchName"
            @find-anggota="findAnggota"
          >
          </SearchField>
          <v-row>
            <v-col
              cols="12"
              md="12"
            >
              <div v-if="searchName === ''">
                <ListAnggota
                  :listAnggota="getAllAnggotas"
                />
              </div>
              <div v-else>
                <ListAnggota
                  :listAnggota="find"
                />
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          v-else
          cols="12"
          md="10"
        >
          <LoadingComponent />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ListAnggota from '@/components/ListAnggota.vue'
import SearchField from '@/components/SearchField.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import gql from 'graphql-tag'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ListAnggota,
    SearchField,
    LoadingComponent
  },

  data() {
    return {
      searchName: "",
      find: []
    }
  },

  apollo: {
    anggota: gql`query MyQuery {
      anggota {
        id
        nama
        keterangan {
          id
          id_anggota
          nilai
          pelajaran
          status
        }
      }
    }`,
  },

  computed: {
    getAllAnggotas () {
      return this.anggota ?? []
    }
  },

  methods: {
    findAnggota (value) {
      this.searchName = value
      this.find = this.getAllAnggotas.filter((el) => {
        return (el.nama.toLowerCase()).includes(this.searchName.toLowerCase())
      })
    }
  },
}
</script>


