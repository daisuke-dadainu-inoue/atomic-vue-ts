<template>
  <el-button
    class="button-atom"
    :type="type"
    @click="click"
    :disabled="disabled"
    >{{ label }}</el-button
  >
</template>
<script lang="ts">
import Vue from 'vue';
import { Button } from 'element-ui';
Vue.component(Button.name, Button);

export default Vue.extend({
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'success',
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
  .button-atom {
    width: 187px;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  .button-atom {
    height: 40px;
    font-size: 14px;
    font-weight: bold;
  }
}
@media screen and (max-width: 320px) {
  .button-atom {
    height: 40px;
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
