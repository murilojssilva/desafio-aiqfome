<template>
  <div class="flex flex-row justify-between">
    <div>
      <h3 class="text-base font-bold">{{ titleText }}</h3>
      <p class="text-xs font-bold text-gray-500">{{ subtitleText }}</p>
    </div>

    <span
      v-if="obrigatory"
      class="flex p-2 bg-gray-700 rounded-lg text-xs text-white font-bold items-center"
      >obrigatório</span
    >
  </div>
</template>

<script>
export default {
  name: 'RadioItem',
  props: {
    titleText: {
      type: String,
      default: '',
    },
    subtitleText: {
      type: String,
      default: '',
    },
    obrigatory: Boolean,
  },
}
</script>
