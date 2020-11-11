<template>
  <router-link :to="to" class="link-atom">{{ label }}</router-link>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped>
@media screen and (min-width: 481px) {
  .link-atom {
    text-decoration: none;
    flex: 0 1 50%;
    font-size: 11px;
    font-weight: bold;
    color: #67c23a;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  .link-atom {
    text-decoration: none;
    flex: 0 1 50%;
    font-size: 11px;
    font-weight: bold;
    color: #67c23a;
  }
}
@media screen and (max-width: 320px) {
  .link-atom {
    text-decoration: none;
    flex: 0 1 50%;
    font-size: 11px;
    font-weight: bold;
    color: #67c23a;
  }
}
</style>
