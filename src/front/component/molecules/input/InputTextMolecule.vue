<template>
  <div
    class="input-text-molecule"
    :class="{ 'input-text-molecule-padding': paddingTopButtom }"
  >
    <input-label-atom
      :label="label"
      :required="required"
      :requiredText="requiredText"
      :validation="validation"
    />
    <input-error-atom v-show="!validation" :errorText="errorText" />
    <input-text-atom
      :value="value"
      :placeholder="placeholder"
      @change="change"
      :disabled="disabled"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import InputLabelAtom from '@/front/component/atoms/input/InputLabelAtom.vue';
import InputErrorAtom from '@/front/component/atoms/input/InputErrorAtom.vue';
import InputTextAtom from '@/front/component/atoms/input/InputTextAtom.vue';
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
    errorText: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    paddingTopButtom: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    change(inputValue: string) {
      this.$emit('change', inputValue);
    },
  },
  components: {
    'input-label-atom': InputLabelAtom,
    'input-error-atom': InputErrorAtom,
    'input-text-atom': InputTextAtom,
  },
});
</script>
<style scoped>
.input-text-molecule {
  text-align: left;
}
.input-text-molecule-padding {
  padding: 10px 0px;
}
</style>
