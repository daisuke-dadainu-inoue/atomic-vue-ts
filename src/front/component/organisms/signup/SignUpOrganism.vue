<template>
  <div class="signup-organism">
    <slot name="title"></slot>
    <slot name="note"></slot>
    <slot name="provider-name"></slot>
    <slot name="login-mail-address"></slot>
    <slot name="login-password"></slot>
    <slot name="termprivacy"></slot>
    <slot name="signup-button"></slot>
    <slot name="annotation"></slot>
    <slot name="login-link"></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SignUpOrganism',
});
</script>
<style scoped>
@media screen and (min-width: 481px) {
  .signup-organism {
    background-color: white;
    padding: 20px 107px 30px;
  }
}

@media screen and (min-width: 321px) and (max-width: 480px) {
  .signup-organism {
    background-color: white;
    padding: 10px 30px 20px;
    margin: 0px 15px;
  }
}
@media screen and (max-width: 320px) {
  .signup-organism {
    background-color: white;
    padding: 10px 30px 20px;
    margin: 0px 15px;
  }
}
</style>
