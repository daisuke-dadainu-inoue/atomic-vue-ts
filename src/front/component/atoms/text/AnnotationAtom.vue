<template>
  <p class="annotation-atom" v-html="annotation"></p>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    annotation: {
      type: String,
      default: '',
    },
  },
});
</script>
<style scoped>
.annotation-atom {
  font-size: 11px;
  line-height: 1.67;
  color: #666666;
}
</style>
