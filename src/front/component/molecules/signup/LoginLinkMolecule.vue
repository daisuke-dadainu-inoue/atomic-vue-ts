<template>
  <div class="login-link-molecule">
    <login-link-atom :to="to" :label="label" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import LoginLinkAtom from '@/front/component/atoms/signup/LoginLinkAtom.vue';

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
  components: {
    'login-link-atom': LoginLinkAtom,
  },
});
</script>
<style scoped>
@media screen and (min-width: 481px) {
  .login-link-molecule {
    margin-top: 15px;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  .login-link-molecule {
    margin-top: 10px;
  }
}
@media screen and (max-width: 320px) {
  .login-link-molecule {
    margin-top: 10px;
  }
}
</style>
