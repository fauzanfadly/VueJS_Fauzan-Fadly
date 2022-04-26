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
              </v-col>
            </v-row>
            <v-card-actions>
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
            </v-card-actions>
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
        const name = this.name
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
  },
}
</script>