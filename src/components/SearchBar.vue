<template>
  <div class="relative">
    <input
      type="text"
      class="py-3 px-4 ps-11 border-transparent rounded-lg text-sm placeholder:text-placeholder lg:w-105 sm:w-32"
      placeholder="busque pela loja ou culinária"
    />
    <div
      class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4"
    >
      <i class="icon pi pi-search bg-transparent text-placeholder"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  props: {},
}
</script>
