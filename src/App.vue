<template class="font-nunito">
  <MainHeader address="Rua Mandaguari, 198" />

  <MainPage />

  <MainFooter />
</template>

<script>
import MainHeader from '@/layouts/MainHeader.vue'
import MainFooter from '@/layouts/MainFooter.vue'
import MainPage from '@/layouts/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
    MainPage,
  },
  data: function () {
    return {
      restaurant: {},
      cart: {
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
      initial_value: 1990,
      subtotal: 0,
      qtd: 0,
    }
  },
  created() {
    this.fetchRestaurant()
    this.updateSubtotal()
  },
  methods: {
    async fetchRestaurant() {
      await fetch('http://localhost:3000/restaurant')
        .then((response) => response.json())
        .then((response) => {
          this.restaurant = response
        })
    },

    formatPrice(value) {
      let val = (value / 100).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },

    addCoke() {
      this.cart.drink.coke++
      this.updateSubtotal()
    },
    removeCoke() {
      this.cart.drink.coke--
      this.updateSubtotal()
    },

    addJuice() {
      this.cart.drink.juice++
      this.updateSubtotal()
    },
    removeJuice() {
      this.cart.drink.juice--
      this.updateSubtotal()
    },

    addWater() {
      this.cart.drink.water++
      this.updateSubtotal()
    },
    removeWater() {
      this.cart.drink.water--
      this.updateSubtotal()
    },

    addQtd() {
      this.qtd++
      this.updateSubtotal()
    },

    removeQtd() {
      this.qtd--
      this.updateSubtotal()
    },

    addHashi() {
      if (this.cart.additional.fork_and_knife) {
        this.cart.additional.fork_and_knife = false
      }
      this.cart.additional.hashi = true
      this.updateSubtotal()
    },

    addForkAndKnife() {
      if (!this.cart.additional.fork_and_knife) {
        this.cart.additional.fork_and_knife = true
        this.cart.additional.hashi = false
      }
      this.updateSubtotal()
    },

    selectSize(value) {
      this.cart.size = value
      if (this.cart.size === 'big') this.initial_value = 2890
      else this.initial_value = 1990

      this.subtotal = this.initial_value
      this.updateSubtotal()
    },

    handleSpringRoll() {
      this.cart.dessert.spring_roll = !this.cart.dessert.spring_roll

      this.updateSubtotal()
    },
    handleCookie() {
      this.cart.dessert.cookie = !this.cart.dessert.cookie

      this.updateSubtotal()
    },

    updateSubtotal() {
      this.subtotal =
        (this.initial_value +
          this.cart.additional.fork_and_knife * 100 +
          Number(this.cart.dessert.spring_roll) * 800 +
          Number(this.cart.dessert.cookie) * 200 +
          this.cart.drink.juice * 600 +
          this.cart.drink.coke * 500 +
          this.cart.drink.water * 300) *
        this.qtd
    },
  },
}
</script>
