<template>
  <p class="input-label-atom">
    {{ label }}
    <span class="input-label-atom-required" v-if="required">{{
      requiredText
    }}</span>
    <span
      class="input-label-atom-validation"
      v-if="required && validation"
    ></span>
  </p>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    requiredText: {
      type: String,
      default: '',
    },
    validation: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
<style scoped>
.input-label-atom {
  font-weight: bold;
  font-size: 12px;
  color: #333333;
}
.input-label-atom-required {
  border-radius: 5px;
  background-color: #67c23a;
  color: #ffffff;
  padding: 2px 5px;
  font-size: 11px;
}
.input-label-atom-validation {
  color: #67c23a;
  font-weight: bold;
  border: 3px solid #67c23a;
  border-radius: 100%;
  width: 3px;
  height: 3px;
  display: inline-block;
}
</style>
