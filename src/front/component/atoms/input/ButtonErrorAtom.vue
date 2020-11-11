<template>
  <p class="button-error-atom">{{ errorText }}</p>
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
.button-error-atom {
  color: red;
  font-size: 14px;
  font-weight: bold;
}
</style>
