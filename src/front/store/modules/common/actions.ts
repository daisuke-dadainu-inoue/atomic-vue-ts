import { ActionTree } from 'vuex';
import { CommonState } from './types';
import { RootState } from '@/front/store/types';

const actions: ActionTree<CommonState, RootState> = {
  openLoading({ commit }) {
    commit('setLoading', true);
  },
  closeLoading({ commit }) {
    commit('setLoading', false);
  },
};

export default actions;
