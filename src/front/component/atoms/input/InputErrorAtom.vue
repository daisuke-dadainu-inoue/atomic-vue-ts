<template>
  <p class="input-error-atom">{{ errorText }}</p>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    errorText: {
      type: String,
      default: '',
    },
  },
});
</script>
<style scoped>
.input-error-atom {
  color: red;
  font-size: 12px;
  padding-top: 3px;
}
</style>
