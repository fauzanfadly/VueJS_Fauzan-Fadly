<template>
  <div>

    <v-expansion-panels
      accordion
      :tile="true"
      :focusable="true"
      :hover="true"
    >
      <v-expansion-panel
        v-for="(anggota, index) in listAnggota"
        :key="index"
      >
        <v-expansion-panel-header>
          <h3>{{ anggota.nama }}</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row justify="center">
            <v-col cols="12" md="10">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left" style="font-size: 16px">
                        Pelajaran
                      </th>
                      <th class="text-left" style="font-size: 16px">
                        Nilai
                      </th>
                      <th class="text-left" style="font-size: 16px">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(keterangan, keteranganIndex) in anggota.keterangan"
                      :key="keteranganIndex"
                    >
                      <td class="text-left">{{ keterangan.pelajaran }}</td>
                      <td class="text-left">{{ keterangan.nilai }}</td>
                      <td
                        v-if="keterangan.status"
                        class="text-left">
                        Lulus
                      </td>
                      <td
                        v-else
                        class="text-left">
                        Tidak Lulus
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </div>
</template>

<script>
export default {
  name: "ListAnggota",

  props: {
    listAnggota: Array,
  }
}
</script>