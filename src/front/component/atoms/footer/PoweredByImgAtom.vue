<template>
  <img class="powered-by-img-atom" :src="imgPath" :alt="alt" />
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    imgPath: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped>
.powered-by-img-atom {
  width: 145px;
}
</style>
