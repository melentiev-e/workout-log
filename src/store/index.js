import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'


Vue.use(Vuex)

// initial state
const state = {
  trainings: []
}

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations    
  })

export default store;