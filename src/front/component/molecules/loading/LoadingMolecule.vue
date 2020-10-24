<template>
  <loading-atom />
</template>
<script lang="ts">
import Vue from 'vue';
import LoadingAtom from '@/front/component/atoms/loading/LoadingAtom.vue';
export default Vue.extend({
  components: {
    'loading-atom': LoadingAtom,
  },
});
</script>
