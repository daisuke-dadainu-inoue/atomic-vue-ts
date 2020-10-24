<template>
  <div class="annotation-molecule">
    <annotation-atom :annotation="annotation" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import AnnotationAtom from '@/front/component/atoms/text/AnnotationAtom.vue';
export default Vue.extend({
  props: {
    annotation: {
      type: String,
      default: '',
    },
  },
  components: {
    'annotation-atom': AnnotationAtom,
  },
});
</script>
<style scoped>
@media screen and (min-width: 481px) {
  .annotation-molecule {
    margin-top: 30px;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  .annotation-molecule {
    margin-top: 30px;
  }
}
@media screen and (max-width: 320px) {
  .annotation-molecule {
    margin-top: 30px;
  }
}
</style>
