<template>

  <button class="btn" @click="() => this.$emit('clickAction')">
    <slot>Button</slot>
  </button>

</template>

<script>
export default {
  name: "Button",
  emits: ['clickAction']
}
</script>

<style scoped>
</style>