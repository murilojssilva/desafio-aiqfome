<template>
  <main v-if="restaurant.products" class="flex flex-col bg-white">
    <section class="flex flex-row items-center gap-2 p-6">
      <img
        v-if="restaurant.logo"
        :src="require('@/assets/images/' + restaurant.logo)"
      />

      <h1 class="text-2xl font-bold text-gray-800">{{ restaurant.name }}</h1>
    </section>

    <section
      v-for="product in restaurant.products"
      :key="product.id"
      class="flex flex-row justify-between px-12 laptop:flex-row tablet:flex-col gap-8"
    >
      <div class="flex flex-col">
        <div>
          <h2 class="text-2xl font-bold text-gray-700">
            {{ product.product_name }}
          </h2>
          <p class="text-base font-bold text-gray-500">
            a partir de
            <span class="text-xl text-purple-750"
              >R$ {{ formatPrice(product.initial_value) }}</span
            >
          </p>
          <p class="text-base text-gray-500">
            {{ product.description }}
          </p>
        </div>

        <div class="flex flex-row justify-between items-center">
          <div>
            <span class="text-base font-bold">quantos?</span>
            <p>
              total: <strong>R$ {{ formatPrice(subtotal) }}</strong>
            </p>
          </div>

          <div class="flex items-center">
            <ButtonItem
              v-if="qtd === 0"
              text="adicionar"
              background-color="bg-gray-500"
              text-color="text-white"
              @click="addQtd()"
            />
            <div v-else class="flex items-center flex-row gap-2">
              <QtdButton
                v-if="qtd === 1"
                icon-name="pi pi-trash"
                background-color="bg-transparent"
                border-color="border-transparent"
                @click="removeQtd()"
              />

              <QtdButton
                v-else-if="qtd > 0"
                icon-name="pi pi-minus"
                background-color="bg-transparent"
                text-color="text-teal-500"
                border-color="border-teal-500"
                @click="removeQtd()"
              />

              <span class="text-base items-center">{{ qtd }}</span>

              <QtdButton
                icon-name="pi pi-plus"
                background-color="bg-transparent"
                text-color="text-teal-500"
                border-color="border-teal-500"
                @click="addQtd()"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        v-if="product.image"
        :src="require('@/assets/images/' + product.image)"
      />
    </section>

    <section class="divide-y-4 divide-bars">
      <div class="p-6">
        <Title
          title-text="qual o tamanho?"
          subtitle-text="escolha 1"
          obrigatory
        />
        <div
          class="flex flex-row w-full justify-between py-4 laptop:flex-row tablet:flex-col gap-4"
        >
          <i
            v-show="item === cart.size"
            class="pi pi-check bg-green-500 rounded-full p-1 text-white text-sm"
          ></i>

          <RadioItem
            :is-selected="cart.size === 'medium'"
            name=" médio"
            element="medium"
            new-price="R$ 19,90"
            old-price="de R$ 22,90 por"
            icon-name="pi pi-dollar"
            border-width="border-2"
            border-color="border-teal-500"
            item="medium"
            value="size"
            @click="selectSize('medium')"
          />

          <RadioItem
            :is-selected="cart.size === 'big'"
            name=" grande"
            element="big"
            price="R$ 28,90"
            item="big"
            value="size"
            @click="selectSize('big')"
          />

          <RadioItem />
        </div>
      </div>
      <div class="p-6">
        <Title
          title-text="vai querer bebida?"
          subtitle-text="escolha quantos quiser"
        />

        <div
          class="flex flex-row gap-8 justify-between py-4 laptop:flex-row tablet:flex-col"
        >
          <div
            class="flex flex-row justify-between items-center w-1/3 laptop:w-1/3 tablet:w-full"
          >
            <div class="flex flex-row gap-2 items-center">
              <QtdButton v-if="cart.drink.coke >= 1" @click="removeCoke()" />

              <QtdButton
                v-else
                disabled
                icon-name="pi pi-minus"
                background-color="bg-gray-150"
                text-color="text-gray-450"
                border-color="border-gray-150"
                @click="removeCoke()"
              />

              <p class="text-gray-700 text-sm font-bold">
                {{ cart.drink.coke }}
              </p>
              <QtdButton
                icon-name="pi pi-plus"
                background-color="bg-transparent"
                text-color="text-teal-500"
                border-color="border-teal-500"
                @click="addCoke()"
              />
              <p class="text-base text-gray-500">coca-cola</p>
            </div>
            <span class="text-xs font-bold text-purple-750">+R$ 5,00</span>
          </div>

          <div
            class="flex flex-row justify-between items-center w-1/3 laptop:w-1/3 tablet:w-full"
          >
            <div class="flex flex-row gap-2 items-center">
              <QtdButton v-if="cart.drink.juice >= 1" @click="removeJuice()" />

              <QtdButton
                v-else
                disabled
                icon-name="pi pi-minus"
                background-color="bg-gray-150"
                text-color="text-gray-450"
                border-color="border-gray-150"
                @click="removeJuice()"
              />

              <p class="text text-sm font-bold">
                {{ cart.drink.juice }}
              </p>

              <QtdButton
                icon-name="pi pi-plus"
                background-color="bg-transparent"
                text-color="text-teal-500"
                border-color="border-teal-500"
                @click="addJuice()"
              />
              <p class="text-base text-gray-500">suco prats laranja</p>
            </div>
            <span class="text-xs font-bold text-purple-750">+R$ 6,00</span>
          </div>

          <div
            class="flex flex-row justify-between items-center w-1/3 laptop:w-1/3 tablet:w-full"
          >
            <div class="flex flex-row gap-2 items-center">
              <QtdButton v-if="cart.drink.water >= 1" @click="removeWater()" />

              <QtdButton
                v-else
                disabled
                icon-name="pi pi-minus"
                background-color="bg-gray-150"
                text-color="text-gray-450"
                border-color="border-gray-150"
                @click="removeWater()"
              />

              <p class="text-gray-700 text-sm font-bold">
                {{ cart.drink.water }}
              </p>

              <QtdButton
                icon-name="pi pi-plus"
                background-color="bg-transparent"
                text-color="text-teal-500"
                border-color="border-teal-500"
                @click="addWater()"
              />

              <p class="text-base text-gray-500">água</p>
            </div>
            <span class="text-xs font-bold text-purple-750">+R$ 3,00</span>
          </div>
        </div>
      </div>
      <div class="p-6">
        <Title title-text="precisa de talher?" subtitle-text="escolha até 1" />

        <div
          class="flex flex-row gap-8 justify-between py-4 laptop:flex-row tablet:flex-col"
        >
          <RadioItem
            name=" hashi"
            item="hashi"
            value="additional"
            :is-selected="cart.additional.hashi"
            @click="addHashi()"
          />

          <RadioItem
            name=" garfo e faca descartável"
            price="+R$ 1,00"
            item="fork_and_knife"
            value="additional"
            :is-selected="cart.additional.fork_and_knife"
            @click="addForkAndKnife()"
          />

          <RadioItem />
        </div>
      </div>
      <div class="p-6">
        <Title title-text="mais alguma coisa?" subtitle-text="escolha até 2" />

        <div
          class="flex flex-row gap-8 justify-between py-4 laptop:flex-row tablet:flex-col"
        >
          <CheckboxItem
            text="biscoito da sorte"
            value="+ R$ 2,00"
            item="cookie"
            :is-selected="cart.dessert.cookie"
            @click="handleCookie()"
          />
          <CheckboxItem
            text="rolinho primavera"
            value="+ R$ 8,00"
            item="spring_roll"
            :is-selected="cart.dessert.spring_roll"
            @click="handleSpringRoll()"
          />

          <CheckboxItem />
        </div>
      </div>
    </section>

    <AditionalItems />
  </main>
  <main v-else class="flex items-center justify-center h-screen">
    <i class="pi pi-spin pi-spinner text-xl text-purple-750"></i>
  </main>
</template>

<script>
import RadioItem from '@/components/RadioItem.vue'
import ButtonItem from '@/components/ButtonItem.vue'
import CheckboxItem from '@/components/CheckboxItem.vue'
import Title from '@/components/Title.vue'
import QtdButton from '@/components/QtdButton.vue'
import AditionalItems from '@/components/AditionalItems.vue'

export default {
  name: 'App',
  components: {
    RadioItem,
    Title,
    CheckboxItem,
    ButtonItem,
    QtdButton,
    AditionalItems,
  },
  data: function () {
    return {
      restaurant: {},
      cart: this.$store.state.cart,
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
