<template>
  <button
    class="hover:bg-opacity-90 font-bold py-2 px-4 rounded text-center flex flex-row items-center gap-2 h-size-9"
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
    text: { type: String, default: '' },
    backgroundColor: { type: String, default: '' },
    textColor: { type: String, default: '' },
    iconName: { type: String, default: '' },
    iconBackgroundColor: { type: String, default: '' },
    iconTextColor: { type: String, default: '' },
  },
}
</script>
