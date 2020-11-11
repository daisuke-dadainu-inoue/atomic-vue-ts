<template>
  <p class="note-atom" v-html="note"></p>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    note: {
      type: String,
      default: '',
    },
  },
});
</script>
<style scoped>
@media screen and (min-width: 481px) {
  .note-atom {
    font-size: 12px;
    color: #666666;
    line-height: 1.67;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  .note-atom {
    font-size: 8px;
    color: #666666;
    line-height: 1.67;
  }
}
@media screen and (max-width: 320px) {
  .note-atom {
    font-size: 8px;
    color: #666666;
    line-height: 1.67;
  }
}
</style>
