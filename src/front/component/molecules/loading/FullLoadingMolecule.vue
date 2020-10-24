<template>
  <div v-show="loading">
    <div class="full-loading-molecule">
      <full-loading-atom />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FullLoadingAtom from '@/front/component/atoms/loading/FullLoadingAtom.vue';

export default Vue.extend({
  name: 'loading',
  props: {
    loading: {
      type: Boolean,
    },
  },
  components: {
    'full-loading-atom': FullLoadingAtom,
  },
});
</script>

<style>
.full-loading-molecule {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
}
</style>
