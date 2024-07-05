import { createStore } from 'vuex'

// Appwide data
const state = {
  count: 0
}

// mutations

const mutations = {
  // use strong type
  increment(state: any) {
    state.count++
  },
  decrement(state: any) {
    state.count--
  }
}

const actions = {
  incrementCount({ commit }: any) {
    commit('increment') // mutation
  },
  decrementCount({ commit }: any) {
    commit('decrement') // mutation
  }
}

export default createStore({
  state,
  actions,
  mutations
})
