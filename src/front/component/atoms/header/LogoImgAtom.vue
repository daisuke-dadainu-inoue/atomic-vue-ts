<template>
  <img class="logo-img-atom" :src="imgPath" :alt="alt" />
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
      default: '',
    },
  },
});
</script>
<style scoped>
@media screen and (min-width: 481px) {
  .logo-img-atom {
    width: 329px;
    margin: 40px 0px 34.9px;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  .logo-img-atom {
    width: 200px;
    margin: 10px 0px;
  }
}
@media screen and (max-width: 320px) {
  .logo-img-atom {
    width: 200px;
    margin: 10px 0px;
  }
}
</style>
