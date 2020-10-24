<template>
  <div class="signup-template">
    <slot name="header"></slot>
    <slot name="signup"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SignUpTemplate',
});
</script>
<style scoped>
@media screen and (min-width: 481px) {
  .signup-template {
    text-align: center;
    width: 506px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  .signup-template {
    text-align: center;
    margin: 0 auto;
  }
}

@media screen and (max-width: 320px) {
  .signup-template {
    text-align: center;
    margin: 0 auto;
  }
}
</style>
