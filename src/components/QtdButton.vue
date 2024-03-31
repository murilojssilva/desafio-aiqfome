<template>
  <button>
    <i
      class="text-xs p-1.5 border-2 rounded-full"
      style="font-weight: bold"
      :class="`icon ${iconName} ${backgroundColor} ${borderColor} ${textColor}`"
    ></i>
  </button>
</template>

<script>
export default {
  name: 'QtdButton',
  props: {
    iconName: {
      type: String,
      default: 'pi pi-minus',
    },
    backgroundColor: {
      type: String,
      default: 'bg-transparent',
    },
    borderColor: {
      type: String,
      default: 'border-teal-500',
    },
    textColor: {
      type: String,
      default: 'text-teal-500',
    },
  },
}
</script>
