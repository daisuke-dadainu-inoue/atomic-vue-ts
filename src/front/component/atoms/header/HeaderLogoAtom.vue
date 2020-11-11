<template>
  <img class="header-logo-atom-img" :src="imgPath" :alt="alt" @click="click" />
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    imgPath: {
      type: String,
    },
    alt: {
      type: String,
      default: '',
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
});
</script>
<style scoped>
@media screen and (min-width: 481px) {
  .header-logo-atom-img {
    width: 200px;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  .header-logo-atom-img {
    width: 140px;
  }
}
@media screen and (max-width: 320px) {
  .header-logo-atom-img {
    width: 130px;
  }
}
</style>
