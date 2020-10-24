<template>
  <div v-show="progress">
    <div class="fullview">
      <div class="progress-molecule">
        <div>
          <progress-atom :percentage="percentage" />
          <progress-text-atom :value="value" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProgressAtom from '@/front/component/atoms/loading/ProgressAtom.vue';
import ProgressTextAtom from '@/front/component/atoms/loading/ProgressTextAtom.vue';

export default Vue.extend({
  name: 'ProgressMolecule',
  props: {
    progress: {
      type: Boolean,
      default: false,
    },
    percentage: {
      type: Number,
      default: 0,
    },
    value: {
      type: String,
      default: '',
    },
  },
  components: {
    'progress-atom': ProgressAtom,
    'progress-text-atom': ProgressTextAtom,
  },
});
</script>

<style>
.fullview {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
}
.progress-molecule {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
