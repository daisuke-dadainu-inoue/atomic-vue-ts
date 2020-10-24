<template>
  <div class="powered-by-molecule">
    <powered-by-img-atom :imgPath="imgPath" :alt="alt" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import PoweredByImgAtom from '@/front/component/atoms/footer/PoweredByImgAtom.vue';
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
  components: {
    'powered-by-img-atom': PoweredByImgAtom,
  },
});
</script>
<style scoped>
.powered-by-molecule {
  margin: 20px 0px;
  text-align: right;
}
</style>
