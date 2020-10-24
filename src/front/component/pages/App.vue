<template>
  <div id="app" class="app-wrap">
    <router-view></router-view>
    <full-loading-moleucle :loading="loading" />
    <progress-molecule
      :progress="progress"
      :percentage="progressPercentage"
      :value="progressValue"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import FullLoadingMolecule from '@/front/component/molecules/loading/FullLoadingMolecule.vue';
import ProgressMolecule from '@/front/component/molecules/loading/ProgressMolecule.vue';

export default Vue.extend({
  name: 'app',
  computed: {
    ...mapGetters('common', {
      loading: 'loading',
    }),
    ...mapGetters('advertising', {
      progress: 'progress',
      progressPercentage: 'progressPercentage',
      progressValue: 'progressValue',
    }),
  },
  components: {
    'full-loading-moleucle': FullLoadingMolecule,
    'progress-molecule': ProgressMolecule,
  },
});
</script>
<style scoped>
.app-wrap {
  height: 100%;
  margin: 0px auto;
}
</style>
