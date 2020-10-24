<template>
  <p class="progress-text-atom" v-html="value"></p>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProgressTextAtom',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped>
.progress-text-atom {
  font-size: 14px;
  margin-bottom: 20px;
  color: #666666;
  margin-top: 20px;
  text-align: center;
}
</style>
