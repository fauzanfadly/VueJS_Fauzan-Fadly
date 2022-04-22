<template>
  <div>
    <v-progress-circular
      :size="70"
      :width="7"
      color="green"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent"
}
</script>
