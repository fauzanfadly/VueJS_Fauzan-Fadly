<template>
  <div>
    <HelloWorld msg="Daftar Anggota"/>

    <v-container class="my-5">
      <v-row justify="center" class="mb-3">
        <v-col cols="10">
          <NewAnggotaForm/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="10"
          v-if="loading"
        >
          <LoadingComponent/>
        </v-col>
        <v-col
          cols="10"
          v-else
        >
          <ListAnggota/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ListAnggota from '@/components/ListAnggota.vue'
import NewAnggotaForm from '@/components/NewAnggotaForm.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ListAnggota,
    NewAnggotaForm,
    LoadingComponent
  },

  computed: {
    loading () {
      return this.$store.state.loading
    }
  }
}
</script>


