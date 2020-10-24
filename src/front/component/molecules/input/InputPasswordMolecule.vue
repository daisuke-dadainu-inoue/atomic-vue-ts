<template>
  <div class="input-password-molecule">
    <input-label-atom
      :label="label"
      :required="required"
      :requiredText="requiredText"
      :validation="validation"
    />
    <input-error-atom v-show="!validation" :errorText="errorText" />
    <input-password-atom
      :value="value"
      :placeholder="placeholder"
      @change="change"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import InputLabelAtom from '@/front/component/atoms/input/InputLabelAtom.vue';
import InputErrorAtom from '@/front/component/atoms/input/InputErrorAtom.vue';
import InputPasswordAtom from '@/front/component/atoms/input/InputPasswordAtom.vue';
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
  },
  methods: {
    change(inputValue: string) {
      this.$emit('change', inputValue);
    },
  },
  components: {
    'input-label-atom': InputLabelAtom,
    'input-error-atom': InputErrorAtom,
    'input-password-atom': InputPasswordAtom,
  },
});
</script>
<style scoped>
.input-password-molecule {
  text-align: left;
  padding: 10px 0px;
}
</style>
