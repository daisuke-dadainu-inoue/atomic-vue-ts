import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';
import { Module } from 'vuex';
import { CommonState } from './types';
import { RootState } from '@/front/store/types';

const common: Module<CommonState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default common;
