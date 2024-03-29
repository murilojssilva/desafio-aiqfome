<template>
  <nav
    class="flex w-full text-white mr-6 gap-4 justify-between px-8 py-3 bg-bookmark_text"
  >
    <div class="flex w-full items-center justify-between">
      <div class="flex gap-8 items-center">
        <img
          class="fill-current h-16 w-16 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          src="@/assets/images/logo.svg"
          alt=""
        />

        <div class="flex flex-row items-center gap-2">
          <i
            class="icon pi pi-map-marker text-lg bg-transparent text-white"
          ></i>
          <span class="font-semibold text-xl tracking-tight">
            <p class="text-sm font-semibold text-delivery_in">entregando em</p>
            <h2 class="text-lg font-bold text-white">
              {{ address }}
              <i
                class="icon pi pi-chevron-right text-sm bg-transparent text-white"
              ></i>
            </h2>
          </span>
        </div>

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
      </div>
      <div class="flex end-0 gap-6">
        <ButtonItem
          text="ver ticket"
          background-color="bg-bookmark"
          text-color="text-bookmark_text"
          icon-name="pi pi-bookmark"
          icon-background-color="bg-transparent"
          icon-text-color="text-bookmark_text"
        />

        <ButtonItem
          text="entrar"
          background-color="bg-button_enter"
          text-color="text-white"
          icon-name="pi pi-user"
          icon-background-color="bg-transparent"
          icon-text-color="text-white"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import ButtonItem from '@/components/ButtonItem.vue'

export default {
  name: 'MainHeader',
  components: {
    ButtonItem,
  },
  props: {
    address: {
      type: String,
      default: '',
    },
  },
}
</script>
