import { createStore } from 'vuex'

export default createStore({
  state: {
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
  },
})
