import Vue from 'vue'
import Vuex from 'vuex'
import ui from './ui'
import form from './form'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ui,
    form
  }
})

export default store
