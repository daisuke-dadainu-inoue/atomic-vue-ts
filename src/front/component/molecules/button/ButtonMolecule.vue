<template>
  <div
    class="button-molecule"
    :class="{ 'button-molecule-left': isMarginLeft }"
  >
    <button-error-atom :errorText="errorText" />
    <button-atom
      :disabled="disabled"
      :type="type"
      :label="label"
      @click="click"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import ButtonErrorAtom from '@/front/component/atoms/input/ButtonErrorAtom.vue';
import ButtonAtom from '@/front/component/atoms/button/ButtonAtom.vue';
export default Vue.extend({
  props: {
    errorText: {
      type: String,
      default: '',
    },
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
    isMarginLeft: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
  components: {
    'button-error-atom': ButtonErrorAtom,
    'button-atom': ButtonAtom,
  },
});
</script>
<style scoped>
.button-molecule {
  margin: 30px 0px;
}
.button-molecule-left {
  margin-left: 15px;
}
</style>
