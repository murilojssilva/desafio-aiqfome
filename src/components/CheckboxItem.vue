<template>
  <div
    class="flex flex-row justify-between items-center laptop:w-1/3 tablet:w-full"
  >
    <div v-if="item || value || text" class="flex flex-row gap-2 items-center">
      <input
        :id="item"
        type="checkbox"
        :name="item"
        class="flex flex-row gap-2 items-center w-5 h-5"
      />
      <label
        class="text-base text-gray-500"
        :class="{
          'font-bold': isSelected,
        }"
        :for="item"
        >{{ text }}</label
      >
    </div>
    <span v-if="value" class="text-xs font-bold text-purple-750">{{
      value
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'RadioItem',
  props: {
    text: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    item: {
      type: String,
      default: '',
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
