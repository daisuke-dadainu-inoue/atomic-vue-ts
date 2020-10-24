<template>
  <div>
    <slot name="powered"></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FooterOrganism',
});
</script>
