<template>
  <button
    class="hover:bg-opacity-90 font-bold py-2 px-4 rounded text-center flex flex-row items-center gap-2"
    :class="`${backgroundColor} ${textColor}`"
  >
    <i :class="`icon ${iconName} ${iconBackgroundColor}  ${iconTextColor}`"></i>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonItem',
  props: {
    text: String,
    backgroundColor: String,
    textColor: String,
    iconName: String,
    iconBackgroundColor: String,
    iconTextColor: String,
  },
}
</script>
