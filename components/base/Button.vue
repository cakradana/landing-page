<template>
  <button
    class="text-sm text-center rounded-full hover:shadow-md hover:shadow-primary-800/50 transition duration-300"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false
}
</script>
