<template>
  <button
    class="flex flex-row items-center justify-center h-9 w-29.5 gap-2 font-bold rounded text-center hover:bg-opacity-90"
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
