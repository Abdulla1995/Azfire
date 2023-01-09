import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
        slug: 'fhn-tehlukesizlik-qurasdirilmasi',
        title: 'FHN sistem',
        description: 'Description text here',
        client: 'FHN flan korpusu',
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
