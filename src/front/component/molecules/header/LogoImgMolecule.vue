<template>
  <logo-img-atom :imgPath="imgPath" :alt="alt" />
</template>
<script lang="ts">
import Vue from 'vue';
import LogoImgAtom from '@/front/component/atoms/header/LogoImgAtom.vue';
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
  components: {
    'logo-img-atom': LogoImgAtom,
  },
});
</script>
