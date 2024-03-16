<template>
  <div>

    <v-card elevation="4">
      <v-card-title class="green white--text">
        Tambahkan Anggota
      </v-card-title>
      <div class="pa-5">
        <v-form
          v-model="valid"
          ref="form"
          lazy-validation
        >
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <p class="text-left mb-1">Nama Anggota *</p>
                <v-text-field
                  dense
                  outlined
                  v-model="name"
                  :rules="nameRules"
                  placeholder="ex: Fauzan Fadly"
                  required
                />
                <p class="text-left mb-1">Dengan Keterangan</p>
                <v-select
                  dense
                  outlined
                  :items="withKeteranganItems"
                  item-text="text"
                  item-value="value"
                  v-model="withKeterangan"
                />
              </v-col>
            </v-row>
            <div v-if="withKeterangan">
              <v-row
                class="my-3"
                v-for="(keterangan, index) in listKeterangan" :key="index"
              >
                <v-col>
                  <v-divider class="py-3" />
                  <v-card class="px-5 py-3">
                    <v-row>
                      <v-col>
                        <p class="text-left mb-1">Pelajaran *</p>
                        <v-text-field
                          dense
                          outlined
                          v-model="keterangan.pelajaran"
                          :rules="pelajaranRules"
                          placeholder="ex: VueJS"
                          required
                        />
                      </v-col>
                      <v-col>
                        <p class="text-left mb-1">Nilai</p>
                        <v-text-field
                          dense
                          outlined
                          v-model="keterangan.nilai"
                          type="number"
                          placeholder="ex: VueJS"
                        />
                      </v-col>
                      <v-col>
                        <p class="text-left mb-1">Nilai</p>
                        <v-select
                          dense
                          outlined
                          :items="keteranganStatusItems"
                          item-text="text"
                          item-value="value"
                          v-model="keterangan.status"
                        />
                      </v-col>
                    </v-row>
                    <v-card-actions>
                      <v-btn
                        outlined
                        color="red"
                        :disabled="listKeterangan.length < 2"
                        @click="deleteKeterangan(index)"
                      >
                        <v-icon class="me-3">
                          mdi-trash-can
                        </v-icon>
                        Hapus
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </div>
            <v-row v-if="withKeterangan">
              <v-col cols="6">
                <v-btn
                  color="green"
                  width="100%"
                  class="white--text"
                  @click="addKeterangan"
                >
                  <v-icon class="me-3">
                    mdi-plus-circle
                  </v-icon>
                  Tambahkan Keterangan
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn
                  color="orange"
                  width="100%"
                  class="white--text"
                  @click="resetKeterangan"
                >
                  <v-icon class="me-3">
                    mdi-sync
                  </v-icon>
                  Reset Keterangan
                </v-btn>
              </v-col>
            </v-row>
            <v-divider class="my-5"/>
            <v-row>
              <v-col cols="12">
                <v-btn
                  color="blue"
                  width="100%"
                  class="white--text"
                  @click="submitNewAnggota"
                >
                  <v-icon class="me-3">
                    mdi-account-plus-outline
                  </v-icon>
                  Submit Anggota Baru
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </v-card>

  </div>
</template>

<script>
import { showSnackbar } from "../globalActions/snackBar";

export default {
  name: "NewAnggotaForm",

  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        v => !!v || 'Nama tidak boleh kosong!',
      ],
      pelajaranRules: [
        v => !!v || 'Pelajaran tidak boleh kosong!',
      ],
      withKeterangan: false,
      withKeteranganItems: [
        { text: 'Tidak', value: false },
        { text: 'Ya', value: true }
      ],
      listKeterangan: [
        { pelajaran: '', nilai: 0, status: false }
      ],
      keteranganStatusItems: [
        { text: 'Tidak Lulus', value: false },
        { text: 'Lulus', value: true }
      ]
    }
  },

  computed: {
    loading () {
      return this.$store.state.loading
    }
  },

  methods: {
    addKeterangan () {
      return this.listKeterangan.push({ pelajaran: '', nilai: 0, status: false })
    },

    deleteKeterangan (index) {
      return this.listKeterangan.splice(index, 1)
    },

    resetKeterangan () {
      this.listKeterangan = [
        { pelajaran: "", nilai: 0, status: false }
      ]
    },

    openSnackbar (message, color) {
      showSnackbar(message, color);
    },

    submitNewAnggota () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('loading', true)
        const name = (this.name).trim()
        // const listKeterangan = this.listKeterangan
        const listKeterangan = [
          { nilai: 10, pelajaran: 'VueJS', status: false }
        ]
        if (this.withKeterangan) {
          this.$apollo.mutate({
            mutation: require("@/gql/mutation/AddAnggotaWithKeterangan.gql"),
            variables: {
              newName: name,
              newKeterangan: listKeterangan
            },
            update: (store, { data: { insert_anggota_with_keterangan } }) => {
              const query = {
                query: require("@/gql/query/GetAnggota.gql"),
                variables: {
                  name: "%%"
                }
              }
              const data = store.readQuery(query)
              data.anggota.push(insert_anggota_with_keterangan)
              store.writeQuery({
                ...query,
                data
              })
            }
          })
          .then(() => {
            this.name = ''
            this.withKeterangan = false
            this.resetKeterangan()
            this.openSnackbar('Anggota berhasil ditambahkan!', 'green')
            this.$store.dispatch('loading', false)
          }).catch((err) => {
            this.openSnackbar('Maaf terjadi Kesalahan : ' + err.toString(), 'red')
            this.$store.dispatch('loading', false)
          });
        } else {
          this.$apollo.mutate({
            mutation: require("@/gql/mutation/AddAnggota.gql"),
            variables: {
              newName: name
            },
            update: (store, { data: { insert_anggota } }) => {
              const query = {
                query: require("@/gql/query/GetAnggota.gql"),
                variables: {
                  name: "%%"
                }
              }
              const data = store.readQuery(query)
              data.anggota.push(insert_anggota.returning[0])
              store.writeQuery({
                ...query,
                data
              })
            }
          })
          .then(() => {
            this.name = ''
            this.withKeterangan = false
            this.resetKeterangan()
            this.openSnackbar('Anggota berhasil ditambahkan!', 'green')
            this.$store.dispatch('loading', false)
          }).catch((err) => {
            this.openSnackbar('Maaf terjadi Kesalahan : ' + err.toString(), 'red')
            this.$store.dispatch('loading', false)
          });
        }
      }
    }
  },
}
</script>