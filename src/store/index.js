import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    devInfo:[]
  },
  mutations: {
    addDev(state,item){
      state.devInfo.push(
        {
          id: state.devInfo.length,
          name: item.name,
          lng: item.lng,
          log: item.log,
          money: item.money
        }
      )
      console.log(this.state.devInfo)
    }
  },
  actions: {
  },
  modules: {
  }
})
