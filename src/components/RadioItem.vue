<template>
  <div
    class="flex flex-row justify-between items-center laptop:w-1/3 tablet:w-full"
  >
    <div
      v-if="name || oldPrice || newPrice || price || value"
      class="flex flex-row gap-2 items-center"
    >
      <i
        v-show="isSelected"
        class="icon pi pi-check bg-teal-500 text-white text-xs p-1 rounded-full"
      ></i>
      <input
        v-show="!isSelected"
        :id="item"
        type="radio"
        :value="value"
        :name="value"
        class="flex flex-row gap-2 items-center w-5 h-5"
      />

      <label
        :for="item"
        :class="{
          'font-bold': isSelected,
        }"
        class="flex flex-row gap-2 text-base text-gray-500"
      >
        <i
          class="bg-transparent text-teal-500 text-xs p-1 rounded-full"
          :class="`icon ${iconName} ${borderColor} ${borderWidth}`"
          style="font-weight: bold"
        ></i>
        {{ name }}
      </label>
    </div>

    <span v-if="oldPrice" class="text-xs font-bold text-gray-500"
      >{{ oldPrice }}
      <span v-if="newPrice" class="text-xs font-bold text-teal-500">{{
        newPrice
      }}</span></span
    >
    <span v-if="price" class="text-xs font-bold text-purple-750">{{
      price
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'RadioItem',
  props: {
    name: {
      type: String,
      default: '',
    },
    borderColor: {
      type: String,
      default: 'transparent',
    },
    borderWidth: {
      type: String,
      default: 'border-0',
    },
    newPrice: {
      type: String,
      default: '',
    },
    oldPrice: {
      type: String,
      default: '',
    },
    iconName: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '',
    },
    item: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      cart: this.$store.state.cart,
    }
  },
}
</script>
