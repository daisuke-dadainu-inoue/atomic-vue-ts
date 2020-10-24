<template>
  <el-progress
    type="circle"
    :percentage="percentage"
    color="#67C23A"
  ></el-progress>
</template>
<script lang="ts">
import Vue from 'vue';
import { Progress } from 'element-ui';
Vue.component(Progress.name, Progress);

export default Vue.extend({
  name: 'ProgressAtom',
  props: {
    percentage: {
      type: Number,
    },
  },
});
</script>
