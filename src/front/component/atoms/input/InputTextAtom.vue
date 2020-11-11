<template>
  <el-input
    class="input-text-atom"
    type="text"
    v-model="input"
    :placeholder="placeholder"
    :disabled="disabled"
  ></el-input>
</template>
<script lang="ts">
import Vue from 'vue';
import { Input } from 'element-ui';
Vue.component(Input.name, Input);

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    input: {
      get(): string {
        return this.value;
      },
      set(inputValue: string) {
        this.$emit('change', inputValue);
      },
    },
  },
});
</script>
<style scoped>
.input-text-atom {
  margin-top: 6px;
}
</style>
