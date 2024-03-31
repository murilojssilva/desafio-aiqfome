<template>
  <nav
    class="flex w-full text-white mr-6 gap-4 justify-between px-8 py-3 bg-bookmark_text"
  >
    <div class="flex w-full items-center justify-between">
      <div class="flex gap-8 items-center">
        <img
          class="h-16 w-16 mr-2"
          src="@/assets/images/logo.svg"
          alt="Logo aiqfome"
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

        <SearchBar />
      </div>
      <div class="flex end-0 gap-6">
        <ButtonItem
          v-show="!isCartEqualInitialCart"
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
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'MainHeader',
  components: {
    ButtonItem,
    SearchBar,
  },
  props: {
    address: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      cart: this.$store.state.cart,
      initial_cart: {
        size: '',
        drink: {
          coke: 0,
          juice: 0,
          water: 0,
        },
        additional: {
          hashi: false,
          fork_and_knife: false,
        },
        dessert: {
          cookie: false,
          spring_roll: false,
        },
      },
    }
  },
  computed: {
    isCartEqualInitialCart() {
      return JSON.stringify(this.cart) === JSON.stringify(this.initial_cart)
    },
  },
}
</script>
