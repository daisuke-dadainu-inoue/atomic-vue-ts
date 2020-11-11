import { GetterTree } from 'vuex';
import { CommonState } from './types';
import { RootState } from '@/front/store/types';

const getters: GetterTree<CommonState, RootState> = {
  loading: (state) => {
    return state.loading;
  },
};

export default getters;
