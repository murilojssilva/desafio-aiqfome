<template>
  <div class="flex flex-row justify-between items-center w-1/3">
    <div
      v-if="name || oldPrice || newPrice || price || value"
      class="flex flex-row gap-2 items-center"
    >
      <input
        :id="item"
        type="radio"
        :value="value"
        :name="value"
        class="flex flex-row gap-2 items-center"
      />
      <label :for="item" class="text-base text-infos"
        ><i
          class="bg-transparent text-button_enter text-sm"
          :class="`icon ${icon_name}`"
        ></i>
        {{ name }}</label
      >
    </div>
    <span v-if="oldPrice" class="text-xs font-bold text-infos"
      >{{ oldPrice }}
      <span v-if="newPrice" class="text-xs font-bold text-button_enter">{{
        newPrice
      }}</span></span
    >
    <span v-if="price" class="text-xs font-bold text-bookmark_text">{{
      price
    }}</span>
  </div>
</template>

<script>
export default {
  name: "RadioItem",
  props: {
    name: String,
    newPrice: String,
    oldPrice: String,
    icon_name: String,
    price: String,
    item: String,
    value: String,
  },
};
</script>

<div class="flex items-center mb-4">
    
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
</div>
