<template>
  <vue-loading
    class="full-loading-atom"
    type="spiningDubbles"
    color="#aaa"
    :size="{ width: '100px', height: '100px' }"
  ></vue-loading>
</template>
<script lang="ts">
import Vue from 'vue';
import { VueLoading } from 'vue-loading-template';

export default Vue.extend({
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    'vue-loading': VueLoading,
  },
});
</script>
<style scoped>
.full-loading-atom {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
