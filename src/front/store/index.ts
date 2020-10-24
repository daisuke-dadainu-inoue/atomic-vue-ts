import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { RootState } from './types';
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {},
  plugins: [
    createPersistedState({
      key: 'hoge',
      storage: window.sessionStorage,
    }),
  ],
  actions: {
    login({ commit }, data) {
      commit('auth/destroy');
      commit('advservice/reset');
      commit('spot/reset');
      commit('auth/create', data);
    },
  },
};

export default new Vuex.Store<RootState>(store);
