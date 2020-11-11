<template>
  <div id="app" class="app-wrap">
    <router-view></router-view>
    <full-loading-moleucle :loading="loading" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import FullLoadingMolecule from '@/front/component/molecules/loading/FullLoadingMolecule.vue';

export default Vue.extend({
  name: 'app',
  computed: {
    ...mapGetters('common', {
      loading: 'loading',
    }),
  },
  components: {
    'full-loading-moleucle': FullLoadingMolecule,
  },
});
</script>
<style scoped>
.app-wrap {
  height: 100%;
  margin: 0px auto;
}
</style>
