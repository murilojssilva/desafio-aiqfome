<template>
  <MainHeader address="Rua Mandaguari, 198" />

  <main class="flex flex-col bg-white">
    <section class="flex flex-row items-center gap-2 p-6">
      <img
        v-if="restaurant.logo"
        :src="require('@/assets/images/' + restaurant.logo)"
      />

      <h1 class="text-2xl font-bold text-title">{{ restaurant.name }}</h1>
    </section>

    <section
      v-for="product in restaurant.products"
      :key="product.id"
      class="flex flex-row justify-between px-12"
    >
      <div class="flex flex-col">
        <div>
          <h2 class="text-2xl font-bold text-subtitle">
            {{ product.product_name }}
          </h2>
          <p class="text-base font-bold text-infos">
            a partir de
            <span class="text-xl text-bookmark_text"
              >R$ {{ formatPrice(product.initial_value) }}</span
            >
          </p>
          <p class="text-base text-infos">
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

          <div class="flex gap-2 items-center">
            <ButtonItem
              v-if="qtd === 0"
              text="adicionar"
              background-color="bg-placeholder"
              text-color="text-white"
              @click="addQtd()"
            />
            <div v-else class="flex flex-row gap-2">
              <button v-if="qtd === 1" @click="removeQtd()">
                <i
                  class="icon pi pi-trash bg-transparent text-button_enter"
                ></i>
              </button>
              <button v-else-if="qtd > 0" @click="removeQtd()">
                <i
                  class="icon pi pi-minus-circle bg-transparent text-button_enter"
                ></i>
              </button>
              <span>{{ qtd }}</span>
              <button @click="addQtd()">
                <i
                  class="icon pi pi-plus-circle bg-transparent text-button_enter"
                ></i>
              </button>
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
        <div class="flex flex-row w-full justify-between p-2 gap-2">
          <RadioItem
            name=" médio"
            new-price="R$ 19,90"
            old-price="de R$ 22,90 por"
            icon-name="pi pi-dollar"
            item="medium"
            value="size"
            @click="selectSize('medium')"
          />
          <RadioItem
            name=" grande"
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

        <div class="flex flex-row gap-8 justify-between">
          <div class="flex flex-row justify-between items-center w-1/3">
            <div class="flex flex-row gap-2 items-center">
              <button v-if="cart.drink.coke >= 1" @click="removeCoke()">
                <i
                  class="icon pi pi-minus-circle text-sm p-1 bg-transparent text-button_enter"
                ></i>
              </button>
              <button v-else disabled @click="removeCoke()">
                <i
                  class="icon pi pi-minus text-sm rounded-full p-1 bg-bars text-infos"
                ></i>
              </button>

              <p class="text-subtitle text-sm font-bold">
                {{ cart.drink.coke }}
              </p>
              <button @click="addCoke()">
                <i
                  class="icon pi pi-plus-circle text-sm p-1 bg-transparent text-button_enter"
                ></i>
              </button>
              <p class="text-base text-infos">coca-cola</p>
            </div>
            <span class="text-xs font-bold text-bookmark_text">+R$ 5,00</span>
          </div>

          <div class="flex flex-row justify-between items-center w-1/3">
            <div class="flex flex-row gap-2 items-center">
              <button v-if="cart.drink.juice >= 1" @click="removeJuice()">
                <i
                  class="icon pi pi-minus-circle text-sm p-1 bg-transparent text-button_enter"
                ></i>
              </button>

              <button v-else disabled @click="removeJuice()">
                <i
                  class="icon pi pi-minus text-sm rounded-full p-1 bg-bars text-infos"
                ></i>
              </button>

              <p class="text-subtitle text-sm font-bold">
                {{ cart.drink.juice }}
              </p>

              <button @click="addJuice()">
                <i
                  class="icon pi pi-plus-circle text-sm p-1 bg-transparent text-button_enter"
                ></i>
              </button>
              <p class="text-base text-infos">suco prats laranja</p>
            </div>
            <span class="text-xs font-bold text-bookmark_text">+R$ 6,00</span>
          </div>

          <div class="flex flex-row justify-between items-center w-1/3">
            <div class="flex flex-row gap-2 items-center">
              <button v-if="cart.drink.water >= 1" @click="removeWater()">
                <i
                  class="icon pi pi-minus-circle text-sm p-1 bg-transparent text-button_enter"
                ></i>
              </button>

              <button v-else disabled @click="removeWater()">
                <i
                  class="icon pi pi-minus text-sm rounded-full p-1 bg-bars text-infos"
                ></i>
              </button>

              <p class="text-subtitle text-sm font-bold">
                {{ cart.drink.water }}
              </p>

              <button @click="addWater()">
                <i
                  class="icon pi pi-plus-circle text-sm p-1 bg-transparent text-button_enter"
                >
                </i>
              </button>
              <p class="text-base text-infos">água</p>
            </div>
            <span class="text-xs font-bold text-bookmark_text">+R$ 3,00</span>
          </div>
        </div>
      </div>
      <div class="p-6">
        <Title title-text="precisa de talher?" subtitle-text="escolha até 1" />

        <div class="flex flex-row gap-8 justify-between">
          <RadioItem
            name=" hashi"
            item="hashi"
            value="additional"
            @click="addHashi()"
          />

          <RadioItem
            name=" garfo e faca descartável"
            price="+R$ 1,00"
            item="fork_and_knife"
            value="additional"
            @click="addForkAndKnife()"
          />

          <RadioItem />
        </div>
      </div>
      <div class="p-6">
        <Title title-text="mais alguma coisa?" subtitle-text="escolha até 2" />

        <div class="flex flex-row gap-8 justify-between">
          <CheckboxItem
            text="biscoito da sorte"
            value="+ R$ 2,00"
            item="cookie"
            @click="handleCookie()"
          />
          <CheckboxItem
            text="rolinho primavera"
            value="+ R$ 8,00"
            item="spring_roll"
            @click="handleSpringRoll()"
          />

          <CheckboxItem />
        </div>
      </div>
    </section>

    <AditionalItems />
  </main>

  <MainFooter />
</template>

<script>
import MainHeader from '@/layouts/MainHeader.vue'
import MainFooter from '@/layouts/MainFooter.vue'
import AditionalItems from '@/layouts/AditionalItems.vue'

import RadioItem from '@/components/RadioItem.vue'
import ButtonItem from '@/components/ButtonItem.vue'
import CheckboxItem from '@/components/CheckboxItem.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
    RadioItem,
    Title,
    AditionalItems,
    CheckboxItem,
    ButtonItem,
  },
  data: function () {
    return {
      restaurant: {},
      cart: {
        size: 'medium',
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
