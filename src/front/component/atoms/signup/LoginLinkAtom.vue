<template>
  <router-link :to="to" class="login-link-atom" id="login-link-atom">{{
    label
  }}</router-link>
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
  .login-link-atom {
    margin-top: 33px;
    font-size: 11px;
    font-weight: bold;
    color: #67c23a;
    text-decoration: none;
    vertical-align: unset;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  .login-link-atom {
    margin-top: 33px;
    font-size: 11px;
    font-weight: bold;
    color: #67c23a;
    text-decoration: none;
    vertical-align: unset;
  }
}
@media screen and (max-width: 320px) {
  .login-link-atom {
    margin-top: 33px;
    font-size: 11px;
    font-weight: bold;
    color: #67c23a;
    text-decoration: none;
    vertical-align: unset;
  }
}
</style>
