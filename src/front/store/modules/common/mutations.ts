import { CommonState } from './types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<CommonState> = {
  setLoading: (state, loading) => {
    state.loading = loading;
  },
};

export default mutations;
