<template>
  <div>
    <v-card elevation="4">
      <v-card-title class="green white--text">
        Daftar Anggota
      </v-card-title>
      <SearchField
        :searchName="searchName"
        @find-anggota="findAnggota"
      />
      <v-divider class="mb-5"/>
      <div
        v-if="$apollo.queries.anggota.loading || loading"
        class="px-5 pb-5"
      >
        <LoadingComponent />
      </div>
      <div v-else class="pb-5">
        <div v-if="getAllAnggotas.length > 0" class="px-5">
          <v-expansion-panels
            accordion
            :tile="true"
            :focusable="true"
            :hover="true"
          >
            <v-expansion-panel
              v-for="(anggota, index) in getAllAnggotas"
              :key="index"
              @click="removeEditName"
            >
              <v-expansion-panel-header>
                <div class="d-flex justify-content-between">
                  <h3 class="me-auto">{{ anggota.nama }}</h3><span>(See more...)</span>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <p class="text-left mb-1 mt-3">Ubah nama anggota</p>
                    <v-text-field
                      dense
                      outlined
                      placeholder="Nama baru"
                      v-model="editName"
                    />
                  </v-col>
                </v-row>
                <v-row justify="space-between">
                  <v-col
                    cols="auto"
                  >
                    <v-btn
                      color="blue"
                      class="white--text"
                      small
                      @click="editAnggota(anggota.id)"
                    >
                      <v-icon class="me-3">
                        mdi-account-edit
                      </v-icon>
                      Edit Anggota
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="auto"
                  >
                    <v-btn
                      color="red"
                      class="white--text"
                      small
                      @click="deleteAnggota(anggota.id)"
                    >
                      <v-icon class="me-3">
                        mdi-account-remove-outline
                      </v-icon>
                      Hapus Anggota
                    </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div v-else>
          <p>Maaf data yang anda cari tidak ditemukan</p>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import SearchField from '@/components/SearchField.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { showSnackbar } from "../globalActions/snackBar";

export default {
  name: "ListAnggota",

  data() {
    return {
      searchName: '',
      editName: '',
      snackbar: {
        show: false,
        message: '',
        color: '',
      },
    }
  },

  components: {
    SearchField,
    LoadingComponent,
  },

  apollo: {
    anggota: {
      query: require("@/gql/query/GetAnggota.gql"),
      variables () {
        return {
          name: "%" + this.searchName + "%"
        }
      }
    }
  },

  computed: {
    getAllAnggotas () {
      return this.anggota ?? []
    },

    loading () {
      return this.$store.state.loading
    }
  },

  methods: {
    findAnggota (value) {
      this.searchName = value
    },

    openSnackbar (message, color) {
      showSnackbar(message, color);
    },

    removeEditName () {
      this.editName = ''
    },

    editAnggota (id) {
      this.$store.dispatch('loading', true)
      const name = this.editName
      this.$apollo.mutate({
        mutation: require("@/gql/mutation/EditAnggota.gql"),
        variables: {
          editedId: id,
          editedName: name
        },
        update: (store, { data: { update_anggota_by_pk } }) => {
          const query = {
            query: require("@/gql/query/GetAnggota.gql"),
            variables: {
              name: "%%"
            }
          }
          let data = store.readQuery(query)
          data = update_anggota_by_pk
          store.writeQuery({
            ...query,
            data,
          })
        }
      })
      .then(() => {
        this.$store.dispatch('loading', false)
        this.openSnackbar('Anggota berhasil diubah!', 'green')
      }).catch(() => {
        this.$store.dispatch('loading', false)
        this.openSnackbar('Anggota gagal diubah!', 'red')
      });
    },

    deleteAnggota (id) {
      this.$store.dispatch('loading', true)
      this.$apollo.mutate({
        mutation: require("@/gql/mutation/DeleteAnggota.gql"),
        variables: {
          deletedId: id
        },
        update: (store, { data: { delete_anggota_by_pk } }) => {
          const query = {
            query: require("@/gql/query/GetAnggota.gql"),
            variables: {
              name: "%%"
            }
          }
          const data = store.readQuery(query)
          const index = data.anggota.findIndex(
            (anggota) => anggota.id === delete_anggota_by_pk.id
          );
          if (index !== -1) {
            data.anggota.splice(index, 1);
            store.writeQuery({
              ...query,
              data,
            });
          }
        }
      })
      .then(() => {
        this.$store.dispatch('loading', false)
        this.openSnackbar('Anggota berhasil dihapus!', 'green')
      }).catch(() => {
        this.$store.dispatch('loading', false)
        this.openSnackbar('Anggota gagal terhapus!', 'red')
      });
    },
  },
}
</script>