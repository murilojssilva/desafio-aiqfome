<template>
  <div class="flex flex-row justify-between items-center w-1/3">
    <div v-if="item || value || text" class="flex flex-row gap-2 items-center">
      <input :id="item" type="checkbox" :name="item" />
      <label class="text-base text-infos" :for="item">{{ text }}</label>
    </div>
    <span v-if="value" class="text-xs font-bold text-bookmark_text">{{
      value
    }}</span>
  </div>
</template>

<script>
export default {
  name: "RadioItem",
  props: {
    text: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    item: {
      type: String,
      default: "",
    },
  },
};
</script>
