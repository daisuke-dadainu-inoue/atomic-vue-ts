<template>
  <h1 class="title-atom">{{ title }}</h1>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
});
</script>
<style scoped>
@media screen and (min-width: 481px) {
  .title-atom {
    font-weight: bold;
    font-size: 20px;
    color: #333333;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  .title-atom {
    font-weight: bold;
    font-size: 18px;
    color: #333333;
  }
}
@media screen and (max-width: 320px) {
  .title-atom {
    font-weight: bold;
    font-size: 18px;
    color: #333333;
  }
}
</style>
