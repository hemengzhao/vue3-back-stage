import { createStore } from 'vuex'

import lodVuex from './modules/olaVuex'
import router from './modules/router'
export default createStore({
  state: {
  },
  mutations: {
   
},
  actions: {
  },
  modules: {
    lodVuex,
    router
  }
})
